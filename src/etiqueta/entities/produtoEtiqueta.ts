import { Produto } from "src/produto/entities/produto.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Etiqueta } from "./etiqueta.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";

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

    @OneToOne(() => Usuario)
    @JoinColumn()
    usuario: Usuario;
}