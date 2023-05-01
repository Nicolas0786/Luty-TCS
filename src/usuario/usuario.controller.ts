import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';

@Controller('usuario')
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
 
  @Post('criar')
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get('buscarTodos')
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get('buscarPorNome/:nome')
  findOne(@Param('nome') nome: string) {
    return this.usuarioService.findOne(nome);
  }

  @Patch('atualizar/:idUsuario')
  update(@Param('idUsuario') idUsuario: number, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+idUsuario, updateUsuarioDto);
  }

 
}
