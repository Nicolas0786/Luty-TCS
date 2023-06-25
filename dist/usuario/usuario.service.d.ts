import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
export declare class UsuarioService {
    private repositorioUsuario;
    constructor(repositorioUsuario: Repository<Usuario>);
    create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario>;
    findAll(): Promise<Usuario[]>;
    findOne(nome: string): Promise<Usuario>;
    buscarLogin(login: string): Promise<Usuario>;
    update(idUsuario: number, updateUsuarioDto: UpdateUsuarioDto): Promise<import("typeorm").UpdateResult>;
    findOneBy(username: string): Promise<Usuario | undefined>;
}
