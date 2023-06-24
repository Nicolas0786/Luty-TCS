import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './role.enum';
import { ROLES_KEY } from './roles.decorator';
import jwt_decode from "jwt-decode";



@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector,) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }

    // TODO Aqui após ajustar o login, pegar o jwt que vem na requisição e apartir da decodificação desse
    // JWT pegar as roles
    //const {headers} = context.switchToHttp().getRequest();
    
    //console.log(headers.authorization)
    //return requiredRoles.some((role) => [Role.Funcionario].includes(role));

    const { headers } = context.switchToHttp().getRequest();
    //console.log("eu", headers.authorization)

    const decode = jwt_decode(headers.authorization);
    //console.log(decode);

    const {permissao}:any = jwt_decode(headers.authorization);
    //console.log(permissao)
    const per = permissao;
    return requiredRoles.some((role) => per.cargo?.includes(role));

    //return requiredRoles.some((role) => [Role.Adm].includes(role));

    


  }
}


