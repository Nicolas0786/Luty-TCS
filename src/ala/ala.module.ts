import { Module } from '@nestjs/common';
import { AlaService } from './ala.service';
import { AlaController } from './ala.controller';
import { Ala } from './entities/ala.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ala])],
  controllers: [AlaController],
  providers: [AlaService],
  exports: [AlaModule],
})
export class AlaModule {}
