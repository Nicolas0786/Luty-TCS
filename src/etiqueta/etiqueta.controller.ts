import { Controller, Get, Post, Body, Patch, Param} from '@nestjs/common';
import { EtiquetaService } from './etiqueta.service';
import { CreateEtiquetaDto } from './dto/create-etiqueta.dto';
import { UpdateEtiquetaDto } from './dto/update-etiqueta.dto';


@Controller('etiqueta')
export class EtiquetaController {
  constructor(private readonly etiquetaService: EtiquetaService) {}

  @Post('cadastrar')
  create(@Body() createEtiquetaDto: CreateEtiquetaDto) {
    return this.etiquetaService.create(createEtiquetaDto);
  
  }
  
  @Get('buscarTodas')
  findAll() {
    return this.etiquetaService.findAll();
  }

  @Get('buscarPorNome:nomeEtiqueta')
  findOne(@Param('nomeEtiqueta') nomeEtiqueta: string) {
    return this.etiquetaService.findOne(nomeEtiqueta);
  }

  /*
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEtiquetaDto: UpdateEtiquetaDto) {
    return this.etiquetaService.update(+id, updateEtiquetaDto);
  }
*/
 
}



