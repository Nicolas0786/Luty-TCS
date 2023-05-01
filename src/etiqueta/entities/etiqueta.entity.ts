import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Etiqueta {
    @PrimaryGeneratedColumn('increment')
    idEtiqueta: number;

    @Column('varchar', { length: 50})
    ipEtiqueta: string;
    
    @Column('varchar', { length: 50})
    nomeEtiqueta: string;

    @Column('int')
    statusEtiqueta: number;

    @Column('varchar', { length: 20})
    respostaItegracaoProduto: string;

    @Column('varchar', { length: 50})
    hashEtiqueta: string;

    @ManyToOne(() => Usuario, (usuario)=> usuario.etiquetas)
    usuario: Usuario;

    

}
