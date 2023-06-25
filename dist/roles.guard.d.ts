import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UsuarioService } from './usuario/usuario.service';
export declare class RolesGuard implements CanActivate {
    private reflector;
    private usuarioService;
    constructor(reflector: Reflector, usuarioService: UsuarioService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
