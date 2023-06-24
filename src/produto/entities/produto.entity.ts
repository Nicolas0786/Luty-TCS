
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Grupo } from 'src/grupo/entities/grupo.entity';
import { Ala } from 'src/ala/entities/ala.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';



@Entity()
export class Produto {
  @PrimaryGeneratedColumn('increment')
  idProduto: number;

  @Column('varchar', { length: 13 })
  codigoEan: number;

  @Column('varchar', { length: 150 })
  descricaoProduto: string;

  @Column('int')
  quantidade: number;

  @Column('decimal', { precision: 12, scale: 2 })
  preco: number;

  @Column('decimal', { precision: 12, scale: 2 })
  custo: number;

  @Column()
  porcentagem: number;

  @Column('int')
  statusProduto: number;

  @ManyToOne(()=> Grupo, (grupo) => grupo.produtos)
  grupos: Grupo;

  //@ManyToOne(()=> Ala, (ala) => ala.produtos)
  //alas: Ala;

  @ManyToOne(() => Ala)
  @JoinColumn({ name: "idAla" })
  alas: Ala;

  @ManyToOne(() => Usuario, (usuario)=> usuario.produtos)
  usuario: Usuario;

  
}

