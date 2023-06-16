import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {


  constructor(
    @InjectRepository(Usuario)
    private repositorioUsuario: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {

    const user = new Usuario;

    const loginExists = await this.repositorioUsuario.findOneBy({login: createUsuarioDto.login});

    if(loginExists){
      throw new Error("Esse login já está sendo utilizado")
    }

    user.nome = createUsuarioDto.nome;
    user.matricula = createUsuarioDto.matricula;
    user.login = createUsuarioDto.login;
    user.senha = await bcrypt.hashSync(createUsuarioDto.senha, 10);
    user.permissao = createUsuarioDto.permissao;
    
    
    if(createUsuarioDto.statusUsuario === undefined){
      user.statusUsuario = 0;
    }else{
      user.statusUsuario = createUsuarioDto.statusUsuario;
    }

    return this.repositorioUsuario.save(user);
  }

  findAll():Promise<Usuario[]> {
    return  this.repositorioUsuario.find({
      select:{
        nome: true,
        matricula: true,
        login: true,
        
      }, where:{
        statusUsuario:0
      }
    });
  }

  findOne(nome: string) {
    return this.repositorioUsuario.findOne({
      select: {
        nome: true, 
        matricula: true,
        login: true,
      }, where:{
        nome,
        statusUsuario:0
      }
    });
  }

  buscarLogin(login: string){
    return this.repositorioUsuario.findOne({
      select: {
        nome: true, 
        matricula: true,
        login: true,
      }, where:{
        login,
        statusUsuario:0
      }
    })
  }

  async update(idUsuario: number, updateUsuarioDto: UpdateUsuarioDto) {

    const user = new Usuario;

    const userOne = await this.repositorioUsuario.findOne({
      select: {
        nome: true, 
        matricula: true,
        login: true,
        senha: true, 
        statusUsuario: true

      }, where:{
        idUsuario
      }
    }) 

    //console.log(userOne);

    if(updateUsuarioDto.nome === undefined){
      user.nome = userOne.nome;
    }else{
      user.nome = updateUsuarioDto.nome;
    }

    if(updateUsuarioDto.matricula === undefined){
      user.matricula = userOne.matricula;
    }else{
      user.matricula = updateUsuarioDto.matricula;
    }

    if(updateUsuarioDto.login === undefined){
      user.login = userOne.login;
    }else{
      user.login = updateUsuarioDto.login;
    }

    if(updateUsuarioDto.senha === undefined){
      user.senha = userOne.senha;
    }else{
      user.senha = updateUsuarioDto.senha;
    }

    if(updateUsuarioDto.statusUsuario === undefined){
      user.statusUsuario = userOne.statusUsuario;
    }else {
      user.statusUsuario = updateUsuarioDto.statusUsuario;
    }

    return this.repositorioUsuario.update(idUsuario, user);
  }


  async findOneBy(login: string): Promise<Usuario | undefined> {
    return await this.repositorioUsuario.findOne({
      select:{
        idUsuario: true,
        login: true,
        senha: true,
      }, relations: {
        permissao: true,
      }, where:{
        login
      }
    }   
    );
  }
}
