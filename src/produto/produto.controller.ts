import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator'
import { Role } from '../auth/role.enum';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('produto')
@UseGuards(RolesGuard)
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  //@Roles(Role.Gerente)
  //@Roles(Role.Coordenador)
  //@UseGuards(JwtAuthGuard)
  @Post('cadastrar')
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtoService.create(createProdutoDto);
  }

 // @Roles(Role.Gerente)
  @Roles(Role.Coordenador)
 // @Roles(Role.Funcionario)
  @UseGuards(JwtAuthGuard)
  @Get('buscarTodos')
  findAll() {
    return this.produtoService.findAll();
  }

  @Roles(Role.Gerente)
  @Roles(Role.Coordenador)
  @Roles(Role.Funcionario)
  @UseGuards(JwtAuthGuard)
  @Get('buscarPorEan/:codigoEan')
  findOne(@Param('codigoEan') codigoEan: string) {
    return this.produtoService.findOne(codigoEan);
  }

  @Get('buscarPorId/:idProduto')
  findOneBy(@Param('idProduto') idProduto: number) {
    return this.produtoService.findOneBy(idProduto);
  }
  
  @Roles(Role.Gerente)
  @Roles(Role.Coordenador)
  @UseGuards(JwtAuthGuard)
  @Patch('atualizar/:idProduto')
  update(@Param('idProduto') idProduto: number, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtoService.update(+ idProduto, updateProdutoDto);
  }

@Get('tes')
tes(){
  return this.produtoService.tes();
}

  
}
