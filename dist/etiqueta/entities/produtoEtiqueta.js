"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoEtiqueta = void 0;
const produto_entity_1 = require("../../produto/entities/produto.entity");
const typeorm_1 = require("typeorm");
const etiqueta_entity_1 = require("./etiqueta.entity");
const usuario_entity_1 = require("../../usuario/entities/usuario.entity");
let ProdutoEtiqueta = class ProdutoEtiqueta {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ProdutoEtiqueta.prototype, "idProdutoEtiqueta", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ProdutoEtiqueta.prototype, "dataIntegracao", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => produto_entity_1.Produto),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", produto_entity_1.Produto)
], ProdutoEtiqueta.prototype, "produto", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => etiqueta_entity_1.Etiqueta),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", etiqueta_entity_1.Etiqueta)
], ProdutoEtiqueta.prototype, "etiqueta", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => usuario_entity_1.Usuario),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", usuario_entity_1.Usuario)
], ProdutoEtiqueta.prototype, "usuario", void 0);
ProdutoEtiqueta = __decorate([
    (0, typeorm_1.Entity)()
], ProdutoEtiqueta);
exports.ProdutoEtiqueta = ProdutoEtiqueta;
//# sourceMappingURL=produtoEtiqueta.js.map