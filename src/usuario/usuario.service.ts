import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {

  constructor(
    @InjectRepository(Usuario)
    private repositorioUsuario: Repository<Usuario>,
  ) {}

  create(createUsuarioDto: CreateUsuarioDto) {

    const user = new Usuario;

    user.nome = createUsuarioDto.nome;
    user.matricula = createUsuarioDto.matricula;
    user.login = createUsuarioDto.login;
    user.senha = createUsuarioDto.senha;
    
    
    if(createUsuarioDto.statusUsuario === undefined){
      user.statusUsuario = 0;
    }else{
      user.statusUsuario = createUsuarioDto.statusUsuario;
    }

    return this.repositorioUsuario.save(user);
  }

  findAll() {
    return `This action returns all usuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
