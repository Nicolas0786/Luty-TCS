import { IsNotEmpty } from "class-validator";
import { Permissao } from "../entities/permissao.entity";

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
   permissao: Permissao;

    //cargo: string;

    
}
