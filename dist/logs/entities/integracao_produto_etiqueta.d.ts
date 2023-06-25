import { Etiqueta } from "src/etiqueta/entities/etiqueta.entity";
import { Produto } from "src/produto/entities/produto.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
export declare class integracao_produto_etiqueta {
    idIntegracao_produto_etiqueta: number;
    dtacao: Date;
    acao: string;
    ipEtiqueta: string;
    nomeEtiqueta: string;
    codigoEan: string;
    descricaoProduto: string;
    preco: number;
    produto: Produto;
    etiqueta: Etiqueta;
    usuario: Usuario;
}
