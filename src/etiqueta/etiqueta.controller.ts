import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EtiquetaService } from './etiqueta.service';
import { CreateEtiquetaDto } from './dto/create-etiqueta.dto';
import { UpdateEtiquetaDto } from './dto/update-etiqueta.dto';

@Controller('etiqueta')
export class EtiquetaController {
  constructor(private readonly etiquetaService: EtiquetaService) {}

  @Post()
  create(@Body() createEtiquetaDto: CreateEtiquetaDto) {
    return this.etiquetaService.create(createEtiquetaDto);
  }

  @Get()
  findAll() {
    return this.etiquetaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.etiquetaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEtiquetaDto: UpdateEtiquetaDto) {
    return this.etiquetaService.update(+id, updateEtiquetaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.etiquetaService.remove(+id);
  }
}
