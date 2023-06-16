import { Controller, Get, Post, Body, Patch, Param, UseGuards} from '@nestjs/common';
import { EtiquetaService } from './etiqueta.service';
import { CreateEtiquetaDto } from './dto/create-etiqueta.dto';
import { UpdateEtiquetaDto } from './dto/update-etiqueta.dto';
import { RolesGuard } from 'src/auth/roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';
import { PrecoEtiqueta } from './dto/preco-etiqueta.dto';


@Controller('etiqueta')
@UseGuards(RolesGuard)
export class EtiquetaController {
  constructor(private readonly etiquetaService: EtiquetaService) {}

  //@Roles(Role.Gerente)
  //@UseGuards(JwtAuthGuard)
  @Post('cadastrar')
  create(@Body() createEtiquetaDto: CreateEtiquetaDto) {
    return this.etiquetaService.create(createEtiquetaDto);
  
  }
  
  @Get('buscarTodas')
  findAll() {
    return this.etiquetaService.findAll();
  }

  @Roles(Role.Gerente)
  @UseGuards(JwtAuthGuard)
  @Get('buscarPorNome/:nomeEtiqueta')
  findOne(@Param('nomeEtiqueta') nomeEtiqueta: string) {
    return this.etiquetaService.findOne(nomeEtiqueta);
  }

  
  @Patch('atualizar/:idEtiqueta')
  update(@Param('idEtiqueta') idEtiqueta: number, @Body() updateEtiquetaDto: UpdateEtiquetaDto) {
    return this.etiquetaService.update(+idEtiqueta, updateEtiquetaDto);
  }

  @Post('alterar')
  manda(@Body() precoEtiqueta: PrecoEtiqueta){
 return this.etiquetaService.mandarPrecoEtiqueta(precoEtiqueta);
  }
}



