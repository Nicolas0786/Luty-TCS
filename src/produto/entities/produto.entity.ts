import internal from 'stream';
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Grupo } from 'src/grupo/entities/grupo.entity';
import { Ala } from 'src/ala/entities/ala.entity';
import { Etiqueta } from 'src/etiqueta/entities/etiqueta.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
//import { Role } from 'src/role.enum';


@Entity()
export class Produto {
  //roles: Role[];

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

  @Column('int')
  statusProduto: number;

  // sim = 0 não = 1
  @Column('int')
  integroEtiqueta: number;
  
  @ManyToOne(()=> Grupo, (grupo) => grupo.produtos)
  grupos: Grupo;

  @ManyToOne(()=> Ala, (ala) => ala.produtos)
  alas: Ala;

  @ManyToOne(() => Usuario, (usuario)=> usuario.produtos)
  usuario: Usuario;

  
}

