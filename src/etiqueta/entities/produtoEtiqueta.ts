import { Produto } from "src/produto/entities/produto.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Etiqueta } from "./etiqueta.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import format from 'date-fns/format';
import parseJSON from 'date-fns/parseJSON';

@Entity()
export class ProdutoEtiqueta{
    @PrimaryGeneratedColumn('increment')
    idProdutoEtiqueta: number;

    @Column({type: 'datetime', default:() => 'NOW()'})
    dataIntegracao: Date;
    
    @Column('decimal', { precision: 12, scale: 2 })
    preco: number;

    @Column('varchar', { length: 150 })
    descricaoProduto: string;

    @ManyToOne(() => Usuario, (usuario)=> usuario.produtoEtiqueta)
    usuario: Usuario;

    @ManyToOne(() => Etiqueta, (etiqueta)=> etiqueta.produtoEtiqueta)
    etiqueta: Etiqueta;

    @ManyToOne(() => Produto, (produto)=> produto.produtoEtiqueta)
    produto: Produto;
}