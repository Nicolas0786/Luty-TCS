import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
import { Grupo } from './entities/grupo.entity';

@Injectable()
export class GrupoService {
  constructor(
    @InjectRepository(Grupo)
    private repositorioGrupo: Repository<Grupo>
  ){}


  create(createGrupoDto: CreateGrupoDto) {

    const Grup = new Grupo;

    Grup.descricaoGrupo = createGrupoDto.descricaoGrupo;
    Grup.usuario = createGrupoDto.usuario;

    return this.repositorioGrupo.save(Grup);
  }

  findAll() {
    return this.repositorioGrupo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} grupo`;
  }

  update(idGrupo: number, updateGrupoDto: UpdateGrupoDto) {
    const grupo = new Grupo;
    grupo.descricaoGrupo = updateGrupoDto.descricaoGrupo;

    return this.repositorioGrupo.update(idGrupo, grupo);
  }

}
