import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post('cadastrar')
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtoService.create(createProdutoDto);
  }

  @Get('buscarTodos')
  findAll() {
    return this.produtoService.findAll();
  }

  @Get('buscarPorEan/:codigoEan')
  findOne(@Param('codigoEan') codigoEan: string) {
    return this.produtoService.findOne(codigoEan);
  }

  @Get('buscarPorId/:idProduto')
  findOneBy(@Param('idProduto') idProduto: number) {
    return this.produtoService.findOneBy(idProduto);
  }
  

  @Patch('atualizar/:idProduto')
  update(@Param('idProduto') idProduto: number, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtoService.update(+ idProduto, updateProdutoDto);
  }

@Get('tes')
tes(){
  return this.produtoService.tes();
}

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtoService.remove(+id);
  }
}
