import { IsNotEmpty } from "class-validator";
import { Permissao } from "../entities/permissao.entity";

export class CreateUsuarioDto {

    @IsNotEmpty()
    nome: string;

    @IsNotEmpty()
    matricula: string;

    @IsNotEmpty()
    login: string;

    @IsNotEmpty()
    senha: string;


    statusUsuario: number;

   @IsNotEmpty()
   permissao: Permissao;

    
}
