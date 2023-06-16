import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAlaDto } from './dto/create-ala.dto';
import { UpdateAlaDto } from './dto/update-ala.dto';
import { Ala } from './entities/ala.entity';

@Injectable()
export class AlaService {

  constructor(
    @InjectRepository(Ala)
    private repositorioAla: Repository<Ala>
  ){}


  create(createAlaDto: CreateAlaDto) {

    const Alaa = new Ala;

    Alaa.descricao = createAlaDto.descricao;
    return this.repositorioAla.save(Alaa);
  }

  findAll() {
    return this.repositorioAla.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} ala`;
  }

  update(idAla: number, updateAlaDto: UpdateAlaDto) {
    const ala = new Ala;
    ala.descricao = updateAlaDto.descricao;

    return this.repositorioAla.update(idAla, ala);
  }

}
