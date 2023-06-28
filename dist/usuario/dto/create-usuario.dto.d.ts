import { Permissao } from "../entities/permissao.entity";
export declare class CreateUsuarioDto {
    nome: string;
    matricula: string;
    login: string;
    senha: string;
    statusUsuario: number;
    permissao: Permissao;
}
