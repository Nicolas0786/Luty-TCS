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
    return `This action returns all ala`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ala`;
  }

  update(id: number, updateAlaDto: UpdateAlaDto) {
    return `This action updates a #${id} ala`;
  }

  remove(id: number) {
    return `This action removes a #${id} ala`;
  }
}
