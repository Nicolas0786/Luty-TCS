import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class etiqueta_log{
    @PrimaryGeneratedColumn('increment')
    idlog_etiqueta: number;

    @Column('datetime')
    dtacao: Date;

    @Column('varchar', { length:10})
    acao: string;

    @Column('int')
    idEtiqueta: number;

    @Column('int')
    usuarioIdUsuario: number;

    @Column('varchar', { length:50})
    ipEtiqueta: string;

    @Column('varchar', { length:50})
    nomeEtiqueta: string;

    @Column('int')
    statusEtiqueta: number;

    @Column('varchar', { length: 80})
    corredor: string;

    @Column('varchar', { length:80})
    pratilheira: string;

   
} 
