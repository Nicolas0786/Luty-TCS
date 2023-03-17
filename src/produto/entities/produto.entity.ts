import internal from 'stream';
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Grupo } from 'src/grupo/entities/grupo.entity';
import { Ala } from 'src/ala/entities/ala.entity';


@Entity()
export class Produto {
  @PrimaryGeneratedColumn('increment')
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
  
  @ManyToOne(()=> Grupo, (grupo) => grupo.produtos)
  grupos: Grupo;

  @ManyToOne(()=> Ala, (ala) => ala.produtos)
  alas: Ala;
}
