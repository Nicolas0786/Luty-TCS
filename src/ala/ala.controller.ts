import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, SetMetadata } from '@nestjs/common';

import { Role } from 'src/auth/role.enum';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { AlaService } from './ala.service';
import { CreateAlaDto } from './dto/create-ala.dto';
import { UpdateAlaDto } from './dto/update-ala.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('ala')
@UseGuards(RolesGuard)
export class AlaController {
  constructor(private readonly alaService: AlaService) {}

  //@Roles(Role.Gerente)
  //@Roles(Role.Coordenador)
  @SetMetadata('roles', ['coordenador', 'gerente'])
  @UseGuards(AuthGuard)
  @Post('criar')
  create(@Body() createAlaDto: CreateAlaDto) {
    return this.alaService.create(createAlaDto);
  }

  @Get('buscarTodas')
  findAll() {
    return this.alaService.findAll();
  }

  @Patch('atualizar/:idAla')
  update(@Param('idAla') idAla: number, @Body() updateAlaDto: UpdateAlaDto) {
    return this.alaService.update(+idAla, updateAlaDto);
  }


}
