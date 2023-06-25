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
exports.integracao_produto_etiqueta = void 0;
const etiqueta_entity_1 = require("../../etiqueta/entities/etiqueta.entity");
const produto_entity_1 = require("../../produto/entities/produto.entity");
const usuario_entity_1 = require("../../usuario/entities/usuario.entity");
const typeorm_1 = require("typeorm");
let integracao_produto_etiqueta = class integracao_produto_etiqueta {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], integracao_produto_etiqueta.prototype, "idIntegracao_produto_etiqueta", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime'),
    __metadata("design:type", Date)
], integracao_produto_etiqueta.prototype, "dtacao", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 10 }),
    __metadata("design:type", String)
], integracao_produto_etiqueta.prototype, "acao", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 50 }),
    __metadata("design:type", String)
], integracao_produto_etiqueta.prototype, "ipEtiqueta", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 50 }),
    __metadata("design:type", String)
], integracao_produto_etiqueta.prototype, "nomeEtiqueta", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 13 }),
    __metadata("design:type", String)
], integracao_produto_etiqueta.prototype, "codigoEan", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 150 }),
    __metadata("design:type", String)
], integracao_produto_etiqueta.prototype, "descricaoProduto", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 12, scale: 2 }),
    __metadata("design:type", Number)
], integracao_produto_etiqueta.prototype, "preco", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => produto_entity_1.Produto, (produto) => produto.integracao),
    __metadata("design:type", produto_entity_1.Produto)
], integracao_produto_etiqueta.prototype, "produto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => etiqueta_entity_1.Etiqueta, (etiqueta) => etiqueta.integracao),
    __metadata("design:type", etiqueta_entity_1.Etiqueta)
], integracao_produto_etiqueta.prototype, "etiqueta", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, (usuario) => usuario.integracao),
    __metadata("design:type", usuario_entity_1.Usuario)
], integracao_produto_etiqueta.prototype, "usuario", void 0);
integracao_produto_etiqueta = __decorate([
    (0, typeorm_1.Entity)()
], integracao_produto_etiqueta);
exports.integracao_produto_etiqueta = integracao_produto_etiqueta;
//# sourceMappingURL=integracao_produto_etiqueta.js.map