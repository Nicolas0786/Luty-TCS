import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {

    constructor(
       private usuarioService: UsuarioService,
       private jwtService: JwtService
        
        
        ) {}

    async validarUsuario(username: string, password: string): Promise<any> {
        const usuario = await this.usuarioService.findOneBy(username);
        //console.log('eu',usuario);

        if(usuario == null){
          throw new Error("Usuario não encontrado");
        }
        if(username == usuario.login && await bcrypt.compare(password, usuario.senha)) {
         /* const { senha, ...result } = usuario;
          return result;*/
          console.log('cert')
          const payload = { permissao: usuario.permissao, username: usuario.login, sub: usuario.idUsuario };
          console.log(payload)
          //console.log(usuario)
  
          return {
            access_token:  this.jwtService.sign(payload),
          };

        }else{
          throw new UnauthorizedException();
        }
        //return null;

      
        
      }
      
      /*async login(user: any) {
        // TODO aqui é necessário ajustar o payload para ter os dados que vão ser necessário lá no RolesGuard 
        // por exemplo

        const payload = { permissao: user.permissao, username: user.login, sub: user.idUsuario };
        console.log(payload)
        console.log(user)

        return {
          access_token:  this.jwtService.sign(payload),
        };
      }*/
}
