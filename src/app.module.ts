import { Module } from '@nestjs/common';
import { Produto } from './produto/entities/produto.entity';
import { ProdutoModule } from './produto/produto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoModule } from './grupo/grupo.module';
import { Grupo } from './grupo/entities/grupo.entity';
import { AlaModule } from './ala/ala.module';
import { Ala } from './ala/entities/ala.entity';

@Module({
  imports: [
    ProdutoModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Nicolas0786345',
      database: 'luty',
      entities: [Produto, Grupo, Ala],
      synchronize: true,
    }),
    GrupoModule,
    AlaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
