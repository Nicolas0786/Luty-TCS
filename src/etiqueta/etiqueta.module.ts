import { Module } from '@nestjs/common';
import { EtiquetaService } from './etiqueta.service';
import { EtiquetaController } from './etiqueta.controller';
import { Etiqueta } from './entities/etiqueta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { Produto } from 'src/produto/entities/produto.entity';
import { ProdutoEtiqueta } from './entities/produtoEtiqueta';

@Module({
  imports: [TypeOrmModule.forFeature([Etiqueta, Produto, ProdutoEtiqueta]), HttpModule.registerAsync({useFactory: () =>({timeout: 50000, maxRedirects: 10})})],
  controllers: [EtiquetaController],
  providers: [EtiquetaService],
  exports: [EtiquetaModule],
})
export class EtiquetaModule {}
