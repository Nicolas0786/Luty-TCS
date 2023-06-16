import { Module } from '@nestjs/common';
import { LogsService } from './logs.service';
import { LogsController } from './logs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { etiqueta_log } from './entities/etiqueta_log';
import { produto_log } from './entities/produto_log';


@Module({
  imports: [TypeOrmModule.forFeature([ etiqueta_log, produto_log])],
  controllers: [LogsController],
  providers: [LogsService],
  exports: [LogsModule]
})
export class LogsModule {}
