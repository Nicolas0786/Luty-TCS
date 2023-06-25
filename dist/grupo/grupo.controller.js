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
exports.GrupoController = void 0;
const common_1 = require("@nestjs/common");
const grupo_service_1 = require("./grupo.service");
const create_grupo_dto_1 = require("./dto/create-grupo.dto");
const update_grupo_dto_1 = require("./dto/update-grupo.dto");
const roles_guard_1 = require("../auth/roles.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
const role_enum_1 = require("../auth/role.enum");
const auth_guard_1 = require("../auth/auth.guard");
let GrupoController = class GrupoController {
    constructor(grupoService) {
        this.grupoService = grupoService;
    }
    create(createGrupoDto) {
        return this.grupoService.create(createGrupoDto);
    }
    findAll() {
        return this.grupoService.findAll();
    }
    findOne(id) {
        return this.grupoService.findOne(+id);
    }
    update(idGrupo, updateGrupoDto) {
        return this.grupoService.update(+idGrupo, updateGrupoDto);
    }
};
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Gerente),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Coordenador),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('criar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_grupo_dto_1.CreateGrupoDto]),
    __metadata("design:returntype", void 0)
], GrupoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('buscarTodos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GrupoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GrupoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('atualizar/:idGrupo'),
    __param(0, (0, common_1.Param)('idGrupo')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_grupo_dto_1.UpdateGrupoDto]),
    __metadata("design:returntype", void 0)
], GrupoController.prototype, "update", null);
GrupoController = __decorate([
    (0, common_1.Controller)('grupo'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [grupo_service_1.GrupoService])
], GrupoController);
exports.GrupoController = GrupoController;
//# sourceMappingURL=grupo.controller.js.map