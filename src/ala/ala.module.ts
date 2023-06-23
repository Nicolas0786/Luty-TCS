import { Module, forwardRef } from '@nestjs/common';
import { AlaService } from './ala.service';
import { AlaController } from './ala.controller';
import { Ala } from './entities/ala.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Ala]), forwardRef(() => AuthModule)],
  controllers: [AlaController],
  providers: [AlaService],
  exports: [AlaModule],
})
export class AlaModule {}
