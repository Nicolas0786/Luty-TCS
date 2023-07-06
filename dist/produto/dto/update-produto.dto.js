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
exports.UpdateProdutoDto = void 0;
const class_validator_1 = require("class-validator");
const grupo_entity_1 = require("../../grupo/entities/grupo.entity");
const ala_entity_1 = require("../../ala/entities/ala.entity");
class UpdateProdutoDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateProdutoDto.prototype, "codigoEan", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProdutoDto.prototype, "descricaoProduto", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateProdutoDto.prototype, "quantidade", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateProdutoDto.prototype, "custo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateProdutoDto.prototype, "porcentagem", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateProdutoDto.prototype, "statusProduto", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", grupo_entity_1.Grupo)
], UpdateProdutoDto.prototype, "grupos", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", ala_entity_1.Ala)
], UpdateProdutoDto.prototype, "alas", void 0);
exports.UpdateProdutoDto = UpdateProdutoDto;
//# sourceMappingURL=update-produto.dto.js.map