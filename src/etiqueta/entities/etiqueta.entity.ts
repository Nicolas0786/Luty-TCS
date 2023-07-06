import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProdutoEtiqueta } from "./produtoEtiqueta";

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

    @Column('varchar', { length: 250})
    hashEtiqueta: string;

    @Column('varchar', { length: 80})
    corredor: string;

    @Column('varchar', { length:80})
    pratilheira: string;
    
    @ManyToOne(() => Usuario, (usuario)=> usuario.etiquetas)
    usuario: Usuario;

    @OneToMany(()=> ProdutoEtiqueta, (produtoEtiqueta) => produtoEtiqueta.etiqueta)
    produtoEtiqueta: ProdutoEtiqueta[];
    

}
