"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var GrupoModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrupoModule = void 0;
const common_1 = require("@nestjs/common");
const grupo_service_1 = require("./grupo.service");
const grupo_controller_1 = require("./grupo.controller");
const grupo_entity_1 = require("./entities/grupo.entity");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../auth/auth.module");
let GrupoModule = GrupoModule_1 = class GrupoModule {
};
GrupoModule = GrupoModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([grupo_entity_1.Grupo]), (0, common_1.forwardRef)(() => auth_module_1.AuthModule)],
        controllers: [grupo_controller_1.GrupoController],
        providers: [grupo_service_1.GrupoService],
        exports: [GrupoModule_1],
    })
], GrupoModule);
exports.GrupoModule = GrupoModule;
//# sourceMappingURL=grupo.module.js.map