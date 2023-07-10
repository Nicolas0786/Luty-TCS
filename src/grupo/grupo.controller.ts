import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, SetMetadata } from '@nestjs/common';
import { GrupoService } from './grupo.service';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';
import { AuthGuard } from 'src/auth/auth.guard';


@Controller('grupo')
@UseGuards(RolesGuard)
export class GrupoController {
  constructor(private readonly grupoService: GrupoService) {}

  //@Roles(Role.Gerente)
  //@Roles(Role.Coordenador)
  @SetMetadata('roles', ['coordenador', 'gerente'])
  @UseGuards(AuthGuard)
  @Post('criar')
  create(@Body() createGrupoDto: CreateGrupoDto) {
    return this.grupoService.create(createGrupoDto);
  }

  @Get('buscarTodos')
  findAll() {
    return this.grupoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.grupoService.findOne(+id);
  }

  @Patch('atualizar/:idGrupo')
  update(@Param('idGrupo')idGrupo: number, @Body() updateGrupoDto: UpdateGrupoDto) {
    return this.grupoService.update(+ idGrupo, updateGrupoDto);
  }

}
