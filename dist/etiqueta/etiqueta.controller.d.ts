import { EtiquetaService } from './etiqueta.service';
import { CreateEtiquetaDto } from './dto/create-etiqueta.dto';
import { UpdateEtiquetaDto } from './dto/update-etiqueta.dto';
import { PrecoEtiqueta } from './dto/preco-etiqueta.dto';
export declare class EtiquetaController {
    private readonly etiquetaService;
    constructor(etiquetaService: EtiquetaService);
    create(createEtiquetaDto: CreateEtiquetaDto): Promise<import("@nestjs/common").HttpException>;
    findAll(): Promise<import("./entities/etiqueta.entity").Etiqueta[]>;
    buscarTodas(): Promise<import("./entities/etiqueta.entity").Etiqueta[]>;
    buscaIntegra(): Promise<import("./entities/produtoEtiqueta").ProdutoEtiqueta[]>;
    findOne(idEtiqueta: number): Promise<import("./entities/etiqueta.entity").Etiqueta>;
    update(idEtiqueta: number, updateEtiquetaDto: UpdateEtiquetaDto): Promise<import("@nestjs/common").HttpException>;
    manda(precoEtiqueta: PrecoEtiqueta): Promise<any>;
}
