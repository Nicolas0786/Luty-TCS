import { Controller, Get, Post, Body, Patch, Param, UseGuards, Request } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

import { AuthService } from 'src/auth/auth.service';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';
import { AuthGuard } from 'src/auth/auth.guard';




@Controller('usuario')
@UseGuards(RolesGuard)
export class UsuarioController {
  
  constructor(
    private readonly usuarioService: UsuarioService,
    private authService: AuthService,
 
    ) {}

  
  @Post('login')
  //async login(@Request() req) { // TODO utilizar PARAMS para pegar da maneira que está mandando na requisição
                                // ou mudar para utilizar BODY e ai tem que mudar na requisição a forma de enviar os dados 

  async login(@Request() req) {                                
   //console.log(req.query);
  //return this.authService.login(req.user);
  return this.authService.validarUsuario(req.query.username, req.query.password);
  
  }
 

  @Roles(Role.Gerente)
  @UseGuards(AuthGuard)
  @Post('criar')
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Roles(Role.Gerente)
  @UseGuards(AuthGuard)
  @Get('buscarTodos')
  findAll() {
    return this.usuarioService.findAll();
  }


  @Roles(Role.Gerente)
  @UseGuards(AuthGuard)
  @Get('buscarPorNome/:nome')
  findOne(@Param('nome') nome: string) {
    return this.usuarioService.findOne(nome);
  }

  @Roles(Role.Gerente)
  @UseGuards(AuthGuard)
  @Get('buscarPorLogin/:login')
  buscarLogin(@Param('login') login: string){
    return this.usuarioService.buscarLogin(login);
  }

  @Roles(Role.Gerente)
  @UseGuards(AuthGuard)
  @Patch('atualizar/:idUsuario')
  update(@Param('idUsuario') idUsuario: number, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+idUsuario, updateUsuarioDto);
  }

 
}
