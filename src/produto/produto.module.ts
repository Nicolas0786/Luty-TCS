import { Module, forwardRef } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { Produto } from './entities/produto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Etiqueta } from 'src/etiqueta/entities/etiqueta.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Produto, Etiqueta]), forwardRef(() => AuthModule)],
  controllers: [ProdutoController],
  providers: [ProdutoService],
  exports: [ProdutoModule],
})
export class ProdutoModule {}
