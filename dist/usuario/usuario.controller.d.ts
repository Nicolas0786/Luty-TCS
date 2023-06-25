import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { AuthService } from 'src/auth/auth.service';
export declare class UsuarioController {
    private readonly usuarioService;
    private authService;
    constructor(usuarioService: UsuarioService, authService: AuthService);
    login(req: any): Promise<any>;
    create(createUsuarioDto: CreateUsuarioDto): Promise<import("./entities/usuario.entity").Usuario>;
    findAll(): Promise<import("./entities/usuario.entity").Usuario[]>;
    findOne(nome: string): Promise<import("./entities/usuario.entity").Usuario>;
    buscarLogin(login: string): Promise<import("./entities/usuario.entity").Usuario>;
    update(idUsuario: number, updateUsuarioDto: UpdateUsuarioDto): Promise<import("typeorm").UpdateResult>;
}
