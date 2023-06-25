import { Produto } from "src/produto/entities/produto.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
export declare class Grupo {
    idGrupo: number;
    descricaoGrupo: string;
    produtos: Produto[];
    usuario: Usuario;
}
