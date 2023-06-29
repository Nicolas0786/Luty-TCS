import { Produto } from "src/produto/entities/produto.entity";
import { Etiqueta } from "./etiqueta.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
export declare class ProdutoEtiqueta {
    idProdutoEtiqueta: number;
    dataIntegracao: Date;
    produto: Produto;
    etiqueta: Etiqueta;
    usuario: Usuario;
}
