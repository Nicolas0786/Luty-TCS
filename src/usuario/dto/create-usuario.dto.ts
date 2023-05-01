import { IsNotEmpty } from "class-validator";
import { Role } from "../entities/role.entity";

export class CreateUsuarioDto {

    @IsNotEmpty()
    nome: string;

    @IsNotEmpty()
    matricula: number;

    @IsNotEmpty()
    login: string;

    @IsNotEmpty()
    senha: string;

    statusUsuario: number;

    @IsNotEmpty()
    role: Role;

    
}
