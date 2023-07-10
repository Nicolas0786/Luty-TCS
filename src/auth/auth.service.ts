import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Usuario } from 'src/usuario/entities/usuario.entity';


@Injectable()
export class AuthService {

    constructor(
       private usuarioService: UsuarioService,
       private jwtService: JwtService
        
        
        ) {}

    async validarUsuario(username: string, password: string): Promise<any> {
        const usuario:Usuario = await this.usuarioService.findOneBy(username);
        //console.log('eu',usuario);

        if(usuario === null){
          throw new HttpException("Usuario não encontrado", HttpStatus.FORBIDDEN);
        }else if(usuario.statusUsuario === 0){
          throw new HttpException("O usuario está desativado e não pode logar", HttpStatus.FORBIDDEN);
        }
        
        if(username == usuario.login && await bcrypt.compare(password, usuario.senha)) {
         /* const { senha, ...result } = usuario;
          return result;*/
          //console.log('cert')
          const payload = { permissao: usuario.permissao, username: usuario.login, idUsuario: usuario.idUsuario, sub: usuario.idUsuario };
          //console.log(payload)
          //console.log(usuario)
  
          return {
            access_token:  this.jwtService.sign(payload),
          };

        }else{
          throw new HttpException("Verifique a senha e o Usuario", HttpStatus.FORBIDDEN);
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
