import { CreateProdutoDto } from './produto/dto/create-produto.dto';
import { ProdutoService } from './produto/produto.service';
export declare class AppController {
    private readonly produtoService;
    constructor(produtoService: ProdutoService);
    findAll(): import("typeorm").Repository<import("./produto/entities/produto.entity").Produto>;
    create(createProdutoDto: CreateProdutoDto): Promise<CreateProdutoDto & import("./produto/entities/produto.entity").Produto>;
}
