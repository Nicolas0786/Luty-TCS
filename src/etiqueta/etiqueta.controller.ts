import { Controller, Get, Post, Body, Patch, Param, UseGuards, Put, SetMetadata} from '@nestjs/common';
import { EtiquetaService } from './etiqueta.service';
import { CreateEtiquetaDto } from './dto/create-etiqueta.dto';
import { UpdateEtiquetaDto } from './dto/update-etiqueta.dto';
import { RolesGuard } from 'src/auth/roles.guard';

import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';
import { PrecoEtiqueta } from './dto/preco-etiqueta.dto';
import { AuthGuard } from 'src/auth/auth.guard';


@Controller('etiqueta')
@UseGuards(RolesGuard)
export class EtiquetaController {
  constructor(private readonly etiquetaService: EtiquetaService) {}

  //@Roles(Role.Gerente)
  //@Roles(Role.Coordenador)
  @SetMetadata('roles', ['coordenador', 'gerente'])
  @UseGuards(AuthGuard)  
  @Post('cadastrar')
  create(@Body() createEtiquetaDto: CreateEtiquetaDto) {
    return this.etiquetaService.cadastrar(createEtiquetaDto);
  
  }
  
  //@Roles(Role.Gerente)
  //@Roles(Role.Coordenador)

  @SetMetadata('roles', ['coordenador', 'gerente'])
  @UseGuards(AuthGuard)  
  @Get('buscarTodasAtivas')
  findAll() {
    return this.etiquetaService.findAll();
  }

  //@Roles(Role.Gerente)
  //@Roles(Role.Coordenador)
  
  @SetMetadata('roles', ['coordenador', 'gerente'])
  @UseGuards(AuthGuard) 
  @Get('buscarTodas')
  buscarTodas(){
    return this.etiquetaService.buscarTodas();
  }

@Get('integra')
buscaIntegra(){
  return this.etiquetaService.integracao();
}


  //@Roles(Role.Gerente)
  //@Roles(Role.Coordenador)
  @SetMetadata('roles', ['coordenador', 'gerente'])
  @UseGuards(AuthGuard) 
  @Get('buscarPorID/:idEtiqueta')
  findOne(@Param('idEtiqueta') idEtiqueta: number) {
    return this.etiquetaService.findOne(idEtiqueta);
  }

  //@Roles(Role.Gerente)
  //@Roles(Role.Coordenador)
  @SetMetadata('roles', ['coordenador', 'gerente'])
  @UseGuards(AuthGuard) 
  @Put('atualizar/:idEtiqueta')
  update(@Param('idEtiqueta') idEtiqueta: number, @Body() updateEtiquetaDto: UpdateEtiquetaDto) {
    return this.etiquetaService.update(+idEtiqueta, updateEtiquetaDto);
  }

  //@Roles(Role.Gerente)
  //@Roles(Role.Coordenador)
  @SetMetadata('roles', ['coordenador', 'gerente'])
  @UseGuards(AuthGuard)  
  @Post('alterar')
  manda(@Body() precoEtiqueta: PrecoEtiqueta){
 return this.etiquetaService.mandarPrecoEtiqueta(precoEtiqueta);
  }
}



