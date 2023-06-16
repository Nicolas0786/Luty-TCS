import { Controller, Get, Post, Body, Patch, Param, UseGuards, Request } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('usuario')
@UseGuards(RolesGuard)
export class UsuarioController {
  
  constructor(
    private readonly usuarioService: UsuarioService,
    private authService: AuthService

    ) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) { // TODO utilizar PARAMS para pegar da maneira que está mandando na requisição
                                // ou mudar para utilizar BODY e ai tem que mudar na requisição a forma de enviar os dados 
   console.log(req.user);
  return this.authService.login(req.user);
  
  }
 

  @Roles(Role.Gerente)
  //@Roles(Role.Coordenador)
  @UseGuards(JwtAuthGuard)
  @Post('criar')
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Roles(Role.Gerente)
  @UseGuards(JwtAuthGuard)
  @Get('buscarTodos')
  findAll() {
    return this.usuarioService.findAll();
  }

  @Roles(Role.Gerente)
  @UseGuards(JwtAuthGuard)
  @Get('buscarPorNome/:nome')
  findOne(@Param('nome') nome: string) {
    return this.usuarioService.findOne(nome);
  }

  @Roles(Role.Gerente)
  @UseGuards(JwtAuthGuard)
  @Get('buscarPorLogin/:login')
  buscarLogin(@Param('login') login: string){
    return this.usuarioService.buscarLogin(login);
  }

  @Roles(Role.Gerente)
  @UseGuards(JwtAuthGuard)
  @Patch('atualizar/:idUsuario')
  update(@Param('idUsuario') idUsuario: number, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+idUsuario, updateUsuarioDto);
  }

 
}
