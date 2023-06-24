import { IsNotEmpty, IsNumber } from "class-validator";
import { Permissao } from "../entities/permissao.entity";

export class CreateUsuarioDto {

    @IsNotEmpty()
    nome: string;

    @IsNumber()
    @IsNotEmpty()
    matricula: number;

    @IsNotEmpty()
    login: string;

    @IsNotEmpty()
    senha: string;

    statusUsuario: number;

   @IsNotEmpty()
   permissao: Permissao;

    
}
