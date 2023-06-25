import { Permissao } from "../entities/permissao.entity";
export declare class CreateUsuarioDto {
    nome: string;
    matricula: number;
    login: string;
    senha: string;
    statusUsuario: number;
    permissao: Permissao;
}
