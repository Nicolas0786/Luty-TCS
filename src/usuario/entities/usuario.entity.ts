import { Ala } from "src/ala/entities/ala.entity";
import { Etiqueta } from "src/etiqueta/entities/etiqueta.entity";
import { Grupo } from "src/grupo/entities/grupo.entity";
import { integracao_produto_etiqueta } from "src/logs/entities/integracao_produto_etiqueta";
import { Produto } from "src/produto/entities/produto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn('increment')
    idUsuario: number;

    @Column('varchar', { length: 80})
    nome: string;

    @Column('int')
    matricula: number;

    @Column('varchar', { length: 50})
    login: string;

    @Column('varchar', { length: 80})
    senha: string;

    @Column('int')
    statusUsuario: number;

    @OneToMany(()=> Produto, (produto) => produto.usuario)
    produtos: Produto[];

    @OneToMany(()=> Ala, (ala) => ala.usuario)
    alas: Ala[];

    @OneToMany(()=> Grupo, (grupo) => grupo.usuario)
    grupos: Grupo[];

    @OneToMany(()=> Etiqueta, (etiqueta) => etiqueta.usuario)
    etiquetas: Etiqueta[];

    @OneToMany(()=> integracao_produto_etiqueta, (integracao) => integracao.usuario)
    integracao: integracao_produto_etiqueta[];
}
