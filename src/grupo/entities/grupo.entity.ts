import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "src/produto/entities/produto.entity";


@Entity()
export class Grupo {
    @PrimaryGeneratedColumn('increment')
    idGrupo: number;

    @Column('varchar', { length: 13})
    descricaoGrupo: string;

    @OneToMany(()=> Produto, (produto) => produto.grupos)
    produtos: Produto[];
}
