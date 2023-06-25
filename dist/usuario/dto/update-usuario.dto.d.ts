import { CreateUsuarioDto } from './create-usuario.dto';
import { Permissao } from '../entities/permissao.entity';
declare const UpdateUsuarioDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUsuarioDto>>;
export declare class UpdateUsuarioDto extends UpdateUsuarioDto_base {
    nome: string;
    matricula: number;
    login: string;
    senha: string;
    statusUsuario: number;
    permissao: Permissao;
}
export {};
