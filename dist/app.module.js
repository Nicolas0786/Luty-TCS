"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const produto_entity_1 = require("./produto/entities/produto.entity");
const produto_module_1 = require("./produto/produto.module");
const typeorm_1 = require("@nestjs/typeorm");
const grupo_module_1 = require("./grupo/grupo.module");
const grupo_entity_1 = require("./grupo/entities/grupo.entity");
const ala_module_1 = require("./ala/ala.module");
const ala_entity_1 = require("./ala/entities/ala.entity");
const etiqueta_module_1 = require("./etiqueta/etiqueta.module");
const etiqueta_entity_1 = require("./etiqueta/entities/etiqueta.entity");
const usuario_entity_1 = require("./usuario/entities/usuario.entity");
const logs_module_1 = require("./logs/logs.module");
const etiqueta_log_1 = require("./logs/entities/etiqueta_log");
const produto_log_1 = require("./logs/entities/produto_log");
const auth_module_1 = require("./auth/auth.module");
const core_1 = require("@nestjs/core");
const roles_guard_1 = require("./auth/roles.guard");
const permissao_entity_1 = require("./usuario/entities/permissao.entity");
const produtoEtiqueta_1 = require("./etiqueta/entities/produtoEtiqueta");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            produto_module_1.ProdutoModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'Nicolas0786345',
                database: 'luty',
                entities: [produto_entity_1.Produto, grupo_entity_1.Grupo, ala_entity_1.Ala, etiqueta_entity_1.Etiqueta, usuario_entity_1.Usuario, etiqueta_log_1.etiqueta_log, produto_log_1.produto_log, permissao_entity_1.Permissao, produtoEtiqueta_1.ProdutoEtiqueta],
                synchronize: true,
            }),
            grupo_module_1.GrupoModule,
            ala_module_1.AlaModule,
            etiqueta_module_1.EtiquetaModule,
            logs_module_1.LogsModule,
            auth_module_1.AuthModule,
        ],
        controllers: [],
        providers: [{ provide: core_1.APP_GUARD,
                useClass: roles_guard_1.RolesGuard },],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map