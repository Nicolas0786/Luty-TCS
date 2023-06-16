import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./usuario.entity";

@Entity()
export class Permissao{
    @PrimaryGeneratedColumn('increment')
    idPermissao:number;

    @Column('varchar', { length: 80})
    cargo: string;

    @OneToMany(()=> Usuario, (usuario) => usuario.permissao)
    usuario: Usuario[];
}