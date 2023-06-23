import { Module, forwardRef } from '@nestjs/common';
import { GrupoService } from './grupo.service';
import { GrupoController } from './grupo.controller';
import { Grupo } from './entities/grupo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Grupo]), forwardRef(() => AuthModule)],
  controllers: [GrupoController],
  providers: [GrupoService],
  exports: [GrupoModule],
})
export class GrupoModule {}
