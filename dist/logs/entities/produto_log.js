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
exports.produto_log = void 0;
const typeorm_1 = require("typeorm");
let produto_log = class produto_log {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], produto_log.prototype, "idlog_produto", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime'),
    __metadata("design:type", Date)
], produto_log.prototype, "dtacao", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 10 }),
    __metadata("design:type", String)
], produto_log.prototype, "acao", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], produto_log.prototype, "idProduto", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 13 }),
    __metadata("design:type", String)
], produto_log.prototype, "codigoEan", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 150 }),
    __metadata("design:type", String)
], produto_log.prototype, "descricaoProduto", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], produto_log.prototype, "quantidade", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 12, scale: 2 }),
    __metadata("design:type", Number)
], produto_log.prototype, "preco", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 12, scale: 2 }),
    __metadata("design:type", String)
], produto_log.prototype, "custo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], produto_log.prototype, "porcentagem", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], produto_log.prototype, "statusProduto", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], produto_log.prototype, "gruposIdGrupo", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], produto_log.prototype, "alasIdAla", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], produto_log.prototype, "usuarioidUsuario", void 0);
produto_log = __decorate([
    (0, typeorm_1.Entity)()
], produto_log);
exports.produto_log = produto_log;
//# sourceMappingURL=produto_log.js.map