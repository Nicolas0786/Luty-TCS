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
import { ala_log } from './logs/entities/ala_log.entity';
import { etiqueta_log } from './logs/entities/etiqueta_log';
import { grupo_log } from './logs/entities/grupo_log';
import { produto_log } from './logs/entities/produto_log';
import { usuario_log } from './logs/entities/usuario_log';
import { integracao_produto_etiqueta } from './logs/entities/integracao_produto_etiqueta';

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
      entities: [Produto, Grupo, Ala, Etiqueta, Usuario, ala_log, etiqueta_log, grupo_log, produto_log, usuario_log, integracao_produto_etiqueta],
      synchronize: true,
    }),
    GrupoModule,
    AlaModule,
    EtiquetaModule,
    UsuarioModule,
    LogsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
