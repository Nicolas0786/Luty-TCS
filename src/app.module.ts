import { Module } from '@nestjs/common';
import { Produto } from './produto/entities/produto.entity';
import { ProdutoModule } from './produto/produto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoModule } from './grupo/grupo.module';
import { Grupo } from './grupo/entities/grupo.entity';
import { AlaModule } from './ala/ala.module';
import { Ala } from './ala/entities/ala.entity';
import { EtiquetaModule } from './etiqueta/etiqueta.module';
import { UsuarioModule } from './usuario/usuario.module';
import { Etiqueta } from './etiqueta/entities/etiqueta.entity';
import { Usuario } from './usuario/entities/usuario.entity';
import { LogsModule } from './logs/logs.module';

import { etiqueta_log } from './logs/entities/etiqueta_log';

import { produto_log } from './logs/entities/produto_log';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/roles.guard';
import { Role } from './usuario/entities/role.entity';


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
      entities: [Produto, Grupo, Ala, Etiqueta, Usuario, etiqueta_log, produto_log, Role],
      synchronize: true,
    }),
    GrupoModule,
    AlaModule,
    EtiquetaModule,
    LogsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [ {provide: APP_GUARD,
    useClass: RolesGuard},],
})
export class AppModule {}
