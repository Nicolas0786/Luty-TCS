import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
export declare class ProdutoController {
    private readonly produtoService;
    constructor(produtoService: ProdutoService);
    update(idProduto: number, updateProdutoDto: UpdateProdutoDto): Promise<import("@nestjs/common").HttpException>;
    create(createProdutoDto: CreateProdutoDto): Promise<import("@nestjs/common").HttpException>;
    findAll(): Promise<import("./entities/produto.entity").Produto[]>;
    findOne(codigoEan: number): Promise<import("./entities/produto.entity").Produto>;
    findOneBy(idProduto: number): Promise<import("./entities/produto.entity").Produto>;
}
