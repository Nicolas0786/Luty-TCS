import { Module, forwardRef } from '@nestjs/common';
import { EtiquetaService } from './etiqueta.service';
import { EtiquetaController } from './etiqueta.controller';
import { Etiqueta } from './entities/etiqueta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { Produto } from 'src/produto/entities/produto.entity';
import { ProdutoEtiqueta } from './entities/produtoEtiqueta';
import { AuthModule } from 'src/auth/auth.module';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Etiqueta, Produto, ProdutoEtiqueta, Usuario]), HttpModule.registerAsync({useFactory: () =>({timeout: 50000, maxRedirects: 10})}), forwardRef(() => AuthModule)],
  controllers: [EtiquetaController],
  providers: [EtiquetaService],
  exports: [EtiquetaModule],
})
export class EtiquetaModule {}
