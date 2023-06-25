"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var EtiquetaModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtiquetaModule = void 0;
const common_1 = require("@nestjs/common");
const etiqueta_service_1 = require("./etiqueta.service");
const etiqueta_controller_1 = require("./etiqueta.controller");
const etiqueta_entity_1 = require("./entities/etiqueta.entity");
const typeorm_1 = require("@nestjs/typeorm");
const axios_1 = require("@nestjs/axios");
const produto_entity_1 = require("../produto/entities/produto.entity");
const produtoEtiqueta_1 = require("./entities/produtoEtiqueta");
const auth_module_1 = require("../auth/auth.module");
let EtiquetaModule = EtiquetaModule_1 = class EtiquetaModule {
};
EtiquetaModule = EtiquetaModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([etiqueta_entity_1.Etiqueta, produto_entity_1.Produto, produtoEtiqueta_1.ProdutoEtiqueta]), axios_1.HttpModule.registerAsync({ useFactory: () => ({ timeout: 50000, maxRedirects: 10 }) }), (0, common_1.forwardRef)(() => auth_module_1.AuthModule)],
        controllers: [etiqueta_controller_1.EtiquetaController],
        providers: [etiqueta_service_1.EtiquetaService],
        exports: [EtiquetaModule_1],
    })
], EtiquetaModule);
exports.EtiquetaModule = EtiquetaModule;
//# sourceMappingURL=etiqueta.module.js.map