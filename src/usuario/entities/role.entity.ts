import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./usuario.entity";

@Entity()
export class Role{
    @PrimaryGeneratedColumn('increment')
    idRole:number;

    @Column('varchar', { length: 80})
    cargo: string;

    @OneToMany(()=> Usuario, (usuario) => usuario.role)
    usuario: Usuario[];
}