import { Usuario } from "src/usuario/entities/usuario.entity";
import { ProdutoEtiqueta } from "./produtoEtiqueta";
export declare class Etiqueta {
    idEtiqueta: number;
    ipEtiqueta: string;
    nomeEtiqueta: string;
    statusEtiqueta: number;
    hashEtiqueta: string;
    corredor: string;
    pratilheira: string;
    usuario: Usuario;
    produtoEtiqueta: ProdutoEtiqueta[];
}
