import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

    const loginExists: Usuario = await this.repositorioUsuario.findOneBy({login: createUsuarioDto.login});

    const matriculaExist: Usuario = await this.repositorioUsuario.findOneBy({matricula: createUsuarioDto.matricula});

    if(loginExists){
      throw new HttpException("Esse login já está sendo utilizado", HttpStatus.FORBIDDEN);
    }

    if(matriculaExist){
      throw new Error("Essa Matricula já está cadastrada");
    }

    user.nome = createUsuarioDto.nome;
    user.matricula = createUsuarioDto.matricula;
    user.login = createUsuarioDto.login;
    user.senha = await bcrypt.hashSync(createUsuarioDto.senha, 8);
  
   user.permissao = createUsuarioDto.permissao;
    
    if(createUsuarioDto.statusUsuario === undefined){
      user.statusUsuario = 1;
    }else{
      user.statusUsuario = createUsuarioDto.statusUsuario;
    }
  
    return this.repositorioUsuario.save(user);
  }

  findAll():Promise<Usuario[]> {
    return  this.repositorioUsuario.find({
      select:{
        idUsuario: true,
        nome: true,
        matricula: true,
        login: true,
        statusUsuario: true,
        
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
        idUsuario: true,
        nome: true, 
        matricula: true,
        login: true,
      },relations:{
        permissao: true,
      },where:{
        login,
        statusUsuario:1
      }
    })
  }

  async update(idUsuario: number, updateUsuarioDto: UpdateUsuarioDto) {
   // console.log('chegou', updateUsuarioDto)
   // console.log('outro teste', updateUsuarioDto.matricula)

    const user = new Usuario();

    const userOne = await this.repositorioUsuario.findOne({
      select: {
        idUsuario: true,
        nome: true, 
        matricula: true,
        login: true,
        senha: true, 
        statusUsuario: true

      }, relations:{
        permissao: true,

      }, where:{
        idUsuario
      }
    }) 

    //console.log(userOne);

    const loginExists: Usuario = await this.repositorioUsuario.findOneBy({login: updateUsuarioDto.login});

    const matriculaExist: Usuario = await this.repositorioUsuario.findOneBy({matricula: updateUsuarioDto.matricula});


    if(updateUsuarioDto.nome === undefined){
      user.nome = userOne.nome;
    }else{
      user.nome = updateUsuarioDto.nome;
    }

    if(updateUsuarioDto.matricula === undefined){
      user.matricula = userOne.matricula;
    }else{
      if(matriculaExist){
         new HttpException("Essa matricula já está sendo utilizada", HttpStatus.FORBIDDEN);
      }
      user.matricula = updateUsuarioDto.matricula;
    }

    if(updateUsuarioDto.login === undefined){
      user.login = userOne.login;
    }else{
      if(loginExists){
         new HttpException("Esse login já está sendo utilizado", HttpStatus.FORBIDDEN);
      }
      user.login = updateUsuarioDto.login;
    }

    if(updateUsuarioDto.senha === undefined){
      user.senha = userOne.senha;
    }else{
      user.senha = await bcrypt.hashSync(updateUsuarioDto.senha, 8);
    }

    if(updateUsuarioDto.statusUsuario === undefined){
      user.statusUsuario = userOne.statusUsuario;
    }else {
      user.statusUsuario = updateUsuarioDto.statusUsuario;
    }

    if(updateUsuarioDto.permissao === undefined){
      user.permissao = userOne.permissao;
    }else{
      user.permissao = updateUsuarioDto.permissao;
    }

    return this.repositorioUsuario.update(idUsuario, user);
  }


  async findOneBy(username: string): Promise<Usuario | undefined> {
    const login: string = username;
       return await this.repositorioUsuario.findOne({
      select:{
        idUsuario: true,
        login: true,
        senha: true,
        statusUsuario: true,
      }, relations: {
        permissao: true,
      }, where:{
        login
      }
    }   
    );
  
  }
}
