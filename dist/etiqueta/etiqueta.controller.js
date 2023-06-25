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
exports.EtiquetaController = void 0;
const common_1 = require("@nestjs/common");
const etiqueta_service_1 = require("./etiqueta.service");
const create_etiqueta_dto_1 = require("./dto/create-etiqueta.dto");
const update_etiqueta_dto_1 = require("./dto/update-etiqueta.dto");
const roles_guard_1 = require("../auth/roles.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
const role_enum_1 = require("../auth/role.enum");
const preco_etiqueta_dto_1 = require("./dto/preco-etiqueta.dto");
const auth_guard_1 = require("../auth/auth.guard");
let EtiquetaController = class EtiquetaController {
    constructor(etiquetaService) {
        this.etiquetaService = etiquetaService;
    }
    create(createEtiquetaDto) {
        return this.etiquetaService.cadastrar(createEtiquetaDto);
    }
    findAll() {
        return this.etiquetaService.findAll();
    }
    findOne(nomeEtiqueta) {
        return this.etiquetaService.findOne(nomeEtiqueta);
    }
    update(idEtiqueta, updateEtiquetaDto) {
        return this.etiquetaService.update(+idEtiqueta, updateEtiquetaDto);
    }
    manda(precoEtiqueta) {
        return this.etiquetaService.mandarPrecoEtiqueta(precoEtiqueta);
    }
};
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Gerente),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Coordenador),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('cadastrar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_etiqueta_dto_1.CreateEtiquetaDto]),
    __metadata("design:returntype", void 0)
], EtiquetaController.prototype, "create", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Gerente),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Coordenador),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('buscarTodas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EtiquetaController.prototype, "findAll", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Gerente),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Coordenador),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('buscarPorNome/:nomeEtiqueta'),
    __param(0, (0, common_1.Param)('nomeEtiqueta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EtiquetaController.prototype, "findOne", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Gerente),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Coordenador),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)('atualizar/:idEtiqueta'),
    __param(0, (0, common_1.Param)('idEtiqueta')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_etiqueta_dto_1.UpdateEtiquetaDto]),
    __metadata("design:returntype", void 0)
], EtiquetaController.prototype, "update", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Gerente),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Coordenador),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('alterar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [preco_etiqueta_dto_1.PrecoEtiqueta]),
    __metadata("design:returntype", void 0)
], EtiquetaController.prototype, "manda", null);
EtiquetaController = __decorate([
    (0, common_1.Controller)('etiqueta'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [etiqueta_service_1.EtiquetaService])
], EtiquetaController);
exports.EtiquetaController = EtiquetaController;
//# sourceMappingURL=etiqueta.controller.js.map