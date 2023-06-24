import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

import { Roles } from '../auth/roles.decorator'
import { Role } from '../auth/role.enum';
import { RolesGuard } from 'src/auth/roles.guard';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('produto')
@UseGuards(RolesGuard)
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Roles(Role.Gerente)
  @Roles(Role.Coordenador)
  @UseGuards(AuthGuard)
  @Post('cadastrar')
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtoService.create(createProdutoDto);
  }

  @Roles(Role.Gerente, Role.Coordenador, Role.Funcionario)
  @UseGuards(AuthGuard)
  @Get('buscarTodos')
  findAll() {
    return this.produtoService.findAll();
  }

  @Roles(Role.Gerente)
  @Roles(Role.Coordenador)
  @Roles(Role.Funcionario)
  @UseGuards(AuthGuard)
  @Get('buscarPorEan/:codigoEan')
  findOne(@Param('codigoEan') codigoEan: number) {
    return this.produtoService.findOne(codigoEan);
  }

  @Get('buscarPorId/:idProduto')
  findOneBy(@Param('idProduto') idProduto: number) {
    return this.produtoService.findOneBy(idProduto);
  }
  
  @Roles(Role.Gerente)
  @Roles(Role.Coordenador)
  @UseGuards(AuthGuard)
  @Patch('atualizar/:idProduto')
  update(@Param('idProduto') idProduto: number, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtoService.update(+ idProduto, updateProdutoDto);
  }

  
}
