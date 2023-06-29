import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { Permissao } from '../entities/permissao.entity';
import { IsOptional } from "class-validator";

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto  ){

    @IsOptional()
    nome: string;

    @IsOptional()
    matricula: string;

    @IsOptional()
    login: string;

    @IsOptional()
    senha: string;

    @IsOptional()
    statusUsuario: number;

    @IsOptional()
   permissao: Permissao;

}