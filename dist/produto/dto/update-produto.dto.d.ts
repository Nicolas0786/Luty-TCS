import { CreateProdutoDto } from './create-produto.dto';
import { Grupo } from 'src/grupo/entities/grupo.entity';
import { Ala } from 'src/ala/entities/ala.entity';
declare const UpdateProdutoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProdutoDto>>;
export declare class UpdateProdutoDto extends UpdateProdutoDto_base {
    codigoEan: number;
    descricaoProduto: string;
    quantidade: number;
    custo: number;
    porcentagem: number;
    statusProduto: number;
    grupos: Grupo;
    alas: Ala;
}
export {};
