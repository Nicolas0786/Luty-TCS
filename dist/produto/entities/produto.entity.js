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
exports.Produto = void 0;
const typeorm_1 = require("typeorm");
const grupo_entity_1 = require("../../grupo/entities/grupo.entity");
const ala_entity_1 = require("../../ala/entities/ala.entity");
const usuario_entity_1 = require("../../usuario/entities/usuario.entity");
let Produto = class Produto {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Produto.prototype, "idProduto", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 13 }),
    __metadata("design:type", Number)
], Produto.prototype, "codigoEan", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 150 }),
    __metadata("design:type", String)
], Produto.prototype, "descricaoProduto", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Produto.prototype, "quantidade", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 12, scale: 2 }),
    __metadata("design:type", Number)
], Produto.prototype, "preco", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 12, scale: 2 }),
    __metadata("design:type", Number)
], Produto.prototype, "custo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Produto.prototype, "porcentagem", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Produto.prototype, "statusProduto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => grupo_entity_1.Grupo, (grupo) => grupo.produtos),
    __metadata("design:type", grupo_entity_1.Grupo)
], Produto.prototype, "grupos", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ala_entity_1.Ala),
    (0, typeorm_1.JoinColumn)({ name: "idAla" }),
    __metadata("design:type", ala_entity_1.Ala)
], Produto.prototype, "alas", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, (usuario) => usuario.produtos),
    __metadata("design:type", usuario_entity_1.Usuario)
], Produto.prototype, "usuario", void 0);
Produto = __decorate([
    (0, typeorm_1.Entity)()
], Produto);
exports.Produto = Produto;
//# sourceMappingURL=produto.entity.js.map