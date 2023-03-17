import { Module } from '@nestjs/common';
import { GrupoService } from './grupo.service';
import { GrupoController } from './grupo.controller';
import { Grupo } from './entities/grupo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Grupo])],
  controllers: [GrupoController],
  providers: [GrupoService],
  exports: [GrupoModule],
})
export class GrupoModule {}
