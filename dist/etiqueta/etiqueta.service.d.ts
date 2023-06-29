import { HttpService } from '@nestjs/axios';
import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateEtiquetaDto } from './dto/create-etiqueta.dto';
import { UpdateEtiquetaDto } from './dto/update-etiqueta.dto';
import { Etiqueta } from './entities/etiqueta.entity';
import { Produto } from 'src/produto/entities/produto.entity';
import { PrecoEtiqueta } from './dto/preco-etiqueta.dto';
import { ProdutoEtiqueta } from './entities/produtoEtiqueta';
export declare class EtiquetaService {
    private repositorioEtiqueta;
    private readonly http;
    private repositorioProduto;
    private repositorioProdutoEtiqueta;
    private readonly logger;
    constructor(repositorioEtiqueta: Repository<Etiqueta>, http: HttpService, repositorioProduto: Repository<Produto>, repositorioProdutoEtiqueta: Repository<ProdutoEtiqueta>);
    cadastrar(createEtiquetaDto: CreateEtiquetaDto): Promise<HttpException>;
    findAll(): Promise<Etiqueta[] | undefined>;
    findOne(idEtiqueta: number): Promise<Etiqueta>;
    update(idEtiqueta: number, updateEtiquetaDto: UpdateEtiquetaDto): Promise<HttpException>;
    mandarPrecoEtiqueta(precoEtiqueta: PrecoEtiqueta): Promise<any>;
}
