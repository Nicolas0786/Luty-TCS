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
exports.CreateProdutoDto = void 0;
const class_validator_1 = require("class-validator");
const grupo_entity_1 = require("../../grupo/entities/grupo.entity");
const ala_entity_1 = require("../../ala/entities/ala.entity");
const usuario_entity_1 = require("../../usuario/entities/usuario.entity");
class CreateProdutoDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateProdutoDto.prototype, "codigoEan", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateProdutoDto.prototype, "quantidade", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateProdutoDto.prototype, "custo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateProdutoDto.prototype, "porcentagem", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", grupo_entity_1.Grupo)
], CreateProdutoDto.prototype, "grupos", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", ala_entity_1.Ala)
], CreateProdutoDto.prototype, "alas", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", usuario_entity_1.Usuario)
], CreateProdutoDto.prototype, "usuario", void 0);
exports.CreateProdutoDto = CreateProdutoDto;
//# sourceMappingURL=create-produto.dto.js.map