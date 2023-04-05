import { Produto } from "src/produto/entities/produto.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ala {
    @PrimaryGeneratedColumn('increment')
    idAla: number;

    @Column('varchar', { length: 13})
    descricao: string;

    @OneToMany(()=> Produto, (produto) => produto.alas)
    produtos: Produto[];

    @ManyToOne(() => Usuario, (usuario)=> usuario.alas)
    usuario: Usuario;
}
