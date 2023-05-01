import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {

    constructor(
       private usuarioService: UsuarioService,
       private jwtService: JwtService
        
        
        ) {}

    async validarUsuario(login: string, senha: string): Promise<any> {
        const usuario = await this.usuarioService.findOneBy(login);
        if (usuario && bcrypt.compare(usuario.senha, senha)) {
          const { senha, ...result } = usuario;
          return result;
        }
        return null;
      }
      
      async login(user: any) {
        // TODO aqui é necessário ajustar o payload para ter os dados que vão ser necessário lá no RolesGuard 
        // por exemplo

        const payload = { role: user.role, username: user.login, sub: user.idUsuario };
        console.log(payload)
        console.log(user)

        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}
