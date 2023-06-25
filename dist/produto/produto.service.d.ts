import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';
export declare class ProdutoService {
    private repositorioProduto;
    constructor(repositorioProduto: Repository<Produto>);
    create(createProdutoDto: CreateProdutoDto): Promise<HttpException>;
    findAll(): Promise<Produto[]>;
    findOne(codigoEan: number): Promise<Produto>;
    findOneBy(idProduto: number): Promise<Produto>;
    update(idProduto: number, updateProdutoDto: UpdateProdutoDto): Promise<HttpException>;
}
