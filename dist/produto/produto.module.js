"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ProdutoModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoModule = void 0;
const common_1 = require("@nestjs/common");
const produto_service_1 = require("./produto.service");
const produto_controller_1 = require("./produto.controller");
const produto_entity_1 = require("./entities/produto.entity");
const typeorm_1 = require("@nestjs/typeorm");
const etiqueta_entity_1 = require("../etiqueta/entities/etiqueta.entity");
const auth_module_1 = require("../auth/auth.module");
const produtoEtiqueta_1 = require("../etiqueta/entities/produtoEtiqueta");
let ProdutoModule = ProdutoModule_1 = class ProdutoModule {
};
ProdutoModule = ProdutoModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([produto_entity_1.Produto, etiqueta_entity_1.Etiqueta, produtoEtiqueta_1.ProdutoEtiqueta]), (0, common_1.forwardRef)(() => auth_module_1.AuthModule)],
        controllers: [produto_controller_1.ProdutoController],
        providers: [produto_service_1.ProdutoService],
        exports: [ProdutoModule_1],
    })
], ProdutoModule);
exports.ProdutoModule = ProdutoModule;
//# sourceMappingURL=produto.module.js.map