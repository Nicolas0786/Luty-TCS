import { integracao_produto_etiqueta } from "src/logs/entities/integracao_produto_etiqueta";
import { Produto } from "src/produto/entities/produto.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToOne(() => Usuario, (usuario)=> usuario.etiquetas)
    usuario: Usuario;

    @OneToMany(()=> integracao_produto_etiqueta, (integracao) => integracao.etiqueta)
    integracao: integracao_produto_etiqueta[];
    

}
