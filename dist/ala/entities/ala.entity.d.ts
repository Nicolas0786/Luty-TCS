import { Produto } from "src/produto/entities/produto.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
export declare class Ala {
    idAla: number;
    descricao: string;
    produtos: Produto[];
    usuario: Usuario;
}
