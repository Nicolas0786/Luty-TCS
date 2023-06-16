import { Produto } from "src/produto/entities/produto.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Etiqueta } from "./etiqueta.entity";

@Entity()
export class ProdutoEtiqueta{
    @PrimaryGeneratedColumn('increment')
    idProdutoEtiqueta: number;

    @CreateDateColumn()
    dataIntegracao: Date;

    @OneToOne(() => Produto)
    @JoinColumn()
    produto: Produto;

    @OneToOne(()=> Etiqueta)
    @JoinColumn()
    etiqueta: Etiqueta;
}