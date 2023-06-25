import { HttpService } from '@nestjs/axios';
import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateEtiquetaDto } from './dto/create-etiqueta.dto';
import { UpdateEtiquetaDto } from './dto/update-etiqueta.dto';
import { Etiqueta } from './entities/etiqueta.entity';
import { Produto } from 'src/produto/entities/produto.entity';
import { PrecoEtiqueta } from './dto/preco-etiqueta.dto';
export declare class EtiquetaService {
    private repositorioEtiqueta;
    private readonly http;
    private repositorioProduto;
    private readonly logger;
    constructor(repositorioEtiqueta: Repository<Etiqueta>, http: HttpService, repositorioProduto: Repository<Produto>);
    cadastrar(createEtiquetaDto: CreateEtiquetaDto): Promise<HttpException>;
    findAll(): Promise<Etiqueta[] | undefined>;
    findOne(nomeEtiqueta: string): Promise<Etiqueta>;
    update(idEtiqueta: number, updateEtiquetaDto: UpdateEtiquetaDto): Promise<HttpException>;
    mandarPrecoEtiqueta(precoEtiqueta: PrecoEtiqueta): Promise<any>;
}
