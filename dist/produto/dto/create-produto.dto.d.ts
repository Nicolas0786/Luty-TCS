import { Grupo } from "src/grupo/entities/grupo.entity";
import { Ala } from "src/ala/entities/ala.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
export declare class CreateProdutoDto {
    codigoEan: number;
    descricaoProduto: string;
    quantidade: number;
    custo: number;
    porcentagem: number;
    statusProduto: number;
    grupos: Grupo;
    alas: Ala;
    usuario: Usuario;
}
