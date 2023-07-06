import { Grupo } from 'src/grupo/entities/grupo.entity';
import { Ala } from 'src/ala/entities/ala.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { ProdutoEtiqueta } from 'src/etiqueta/entities/produtoEtiqueta';
export declare class Produto {
    idProduto: number;
    codigoEan: number;
    descricaoProduto: string;
    quantidade: number;
    preco: number;
    custo: number;
    porcentagem: number;
    statusProduto: number;
    grupos: Grupo;
    alas: Ala;
    usuario: Usuario;
    produtoEtiqueta: ProdutoEtiqueta[];
}
