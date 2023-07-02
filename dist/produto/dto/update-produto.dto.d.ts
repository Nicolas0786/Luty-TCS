import { Grupo } from 'src/grupo/entities/grupo.entity';
import { Ala } from 'src/ala/entities/ala.entity';
export declare class UpdateProdutoDto {
    codigoEan: number;
    descricaoProduto: string;
    quantidade: number;
    custo: number;
    porcentagem: number;
    statusProduto: number;
    grupos: Grupo;
    alas: Ala;
}
