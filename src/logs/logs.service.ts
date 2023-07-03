import { Injectable } from '@nestjs/common';
import { CreateLogDto } from './dto/create-log.dto';
import { UpdateLogDto } from './dto/update-log.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoEtiqueta } from 'src/etiqueta/entities/produtoEtiqueta';
import { Repository } from 'typeorm';

@Injectable()
export class LogsService {

  constructor(
    @InjectRepository(ProdutoEtiqueta)
    private repositorioProdutoEtiqueta: Repository<ProdutoEtiqueta>
  ){}



  create(createLogDto: CreateLogDto) {
    return 'This action adds a new log';
  }

  findAll() {   
    return 'djaj';
  }

  findOne(id: number) {
    return `This action returns a #${id} log`;
  }

  update(id: number, updateLogDto: UpdateLogDto) {
    return `This action updates a #${id} log`;
  }

  remove(id: number) {
    return `This action removes a #${id} log`;
  }
}
