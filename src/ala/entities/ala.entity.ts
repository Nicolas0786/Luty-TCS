import { Produto } from "src/produto/entities/produto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ala {
    @PrimaryGeneratedColumn('increment')
    idAla: number;

    @Column('varchar', { length: 13})
    descricao: string;

    @OneToMany(()=> Produto, (produto) => produto.alas)
    produtos: Produto[];
}
