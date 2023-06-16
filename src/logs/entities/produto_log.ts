import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class produto_log{
    @PrimaryGeneratedColumn('increment')
    idlog_produto: number;

    @Column('datetime')
    dtacao: Date;

    @Column('varchar', { length:10})
    acao: string;

    @Column('int')
    idProduto: number;

    @Column('varchar', { length: 13 })
    codigoEan: string;

    @Column('varchar', { length: 150 })
    descricaoProduto: string;

    @Column('int')
    quantidade: number;

    @Column('decimal', { precision: 12, scale: 2 })
    preco: number;

    @Column('decimal', { precision: 12, scale: 2 })
    custo: string;

    @Column()
    porcentagem: number;

    @Column('int')
    statusProduto: number;

    @Column('int')
    gruposIdGrupo: number;

    @Column('int')
    alasIdAla: number;

    //@Column('int', {nullable: true})
    @Column('int')
    usuarioidUsuario: number;
}