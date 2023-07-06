import { Ala } from "src/ala/entities/ala.entity";
import { Etiqueta } from "src/etiqueta/entities/etiqueta.entity";
import { Grupo } from "src/grupo/entities/grupo.entity";
import { Produto } from "src/produto/entities/produto.entity";
import { Permissao } from "./permissao.entity";
import { ProdutoEtiqueta } from "src/etiqueta/entities/produtoEtiqueta";
export declare class Usuario {
    idUsuario: number;
    nome: string;
    matricula: string;
    login: string;
    senha: string;
    statusUsuario: number;
    produtos: Produto[];
    alas: Ala[];
    grupos: Grupo[];
    etiquetas: Etiqueta[];
    permissao: Permissao;
    produtoEtiqueta: ProdutoEtiqueta[];
}
