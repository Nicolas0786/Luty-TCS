import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { Produto } from './entities/produto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Etiqueta } from 'src/etiqueta/entities/etiqueta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Produto, Etiqueta])],
  controllers: [ProdutoController],
  providers: [ProdutoService],
  exports: [ProdutoModule],
})
export class ProdutoModule {}
