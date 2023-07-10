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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoController = void 0;
const common_1 = require("@nestjs/common");
const produto_service_1 = require("./produto.service");
const create_produto_dto_1 = require("./dto/create-produto.dto");
const update_produto_dto_1 = require("./dto/update-produto.dto");
const roles_guard_1 = require("../auth/roles.guard");
const auth_guard_1 = require("../auth/auth.guard");
let ProdutoController = class ProdutoController {
    constructor(produtoService) {
        this.produtoService = produtoService;
    }
    update(idProduto, updateProdutoDto) {
        return this.produtoService.update(+idProduto, updateProdutoDto);
    }
    create(createProdutoDto) {
        return this.produtoService.create(createProdutoDto);
    }
    findAll() {
        return this.produtoService.findAll();
    }
    findOne(codigoEan) {
        return this.produtoService.findOne(codigoEan);
    }
    findOneBy(idProduto) {
        return this.produtoService.findOneBy(idProduto);
    }
};
__decorate([
    (0, common_1.SetMetadata)('roles', ['coordenador', 'gerente']),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)('atualizar/:idProduto'),
    __param(0, (0, common_1.Param)('idProduto')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_produto_dto_1.UpdateProdutoDto]),
    __metadata("design:returntype", void 0)
], ProdutoController.prototype, "update", null);
__decorate([
    (0, common_1.SetMetadata)('roles', ['coordenador', 'gerente']),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('cadastrar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_produto_dto_1.CreateProdutoDto]),
    __metadata("design:returntype", void 0)
], ProdutoController.prototype, "create", null);
__decorate([
    (0, common_1.SetMetadata)('roles', ['coordenador', 'gerente', 'funcionario']),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('buscarTodos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProdutoController.prototype, "findAll", null);
__decorate([
    (0, common_1.SetMetadata)('roles', ['coordenador', 'gerente', 'funcionario']),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('buscarPorEan/:codigoEan'),
    __param(0, (0, common_1.Param)('codigoEan')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProdutoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('buscarPorId/:idProduto'),
    __param(0, (0, common_1.Param)('idProduto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProdutoController.prototype, "findOneBy", null);
ProdutoController = __decorate([
    (0, common_1.Controller)('produto'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [produto_service_1.ProdutoService])
], ProdutoController);
exports.ProdutoController = ProdutoController;
//# sourceMappingURL=produto.controller.js.map