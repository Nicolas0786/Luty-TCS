import { Module } from '@nestjs/common';
import { EtiquetaService } from './etiqueta.service';
import { EtiquetaController } from './etiqueta.controller';
import { Etiqueta } from './entities/etiqueta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Etiqueta])],
  controllers: [EtiquetaController],
  providers: [EtiquetaService],
  exports: [EtiquetaModule],
})
export class EtiquetaModule {}
