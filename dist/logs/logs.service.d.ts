import { CreateLogDto } from './dto/create-log.dto';
import { UpdateLogDto } from './dto/update-log.dto';
import { ProdutoEtiqueta } from 'src/etiqueta/entities/produtoEtiqueta';
import { Repository } from 'typeorm';
export declare class LogsService {
    private repositorioProdutoEtiqueta;
    constructor(repositorioProdutoEtiqueta: Repository<ProdutoEtiqueta>);
    create(createLogDto: CreateLogDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLogDto: UpdateLogDto): string;
    remove(id: number): string;
}
