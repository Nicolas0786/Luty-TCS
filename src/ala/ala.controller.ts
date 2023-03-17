import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlaService } from './ala.service';
import { CreateAlaDto } from './dto/create-ala.dto';
import { UpdateAlaDto } from './dto/update-ala.dto';

@Controller('ala')
export class AlaController {
  constructor(private readonly alaService: AlaService) {}

  @Post('criar')
  create(@Body() createAlaDto: CreateAlaDto) {
    return this.alaService.create(createAlaDto);
  }

  @Get()
  findAll() {
    return this.alaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlaDto: UpdateAlaDto) {
    return this.alaService.update(+id, updateAlaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alaService.remove(+id);
  }
}
