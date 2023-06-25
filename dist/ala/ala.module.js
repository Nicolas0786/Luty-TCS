"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AlaModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlaModule = void 0;
const common_1 = require("@nestjs/common");
const ala_service_1 = require("./ala.service");
const ala_controller_1 = require("./ala.controller");
const ala_entity_1 = require("./entities/ala.entity");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../auth/auth.module");
let AlaModule = AlaModule_1 = class AlaModule {
};
AlaModule = AlaModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ala_entity_1.Ala]), (0, common_1.forwardRef)(() => auth_module_1.AuthModule)],
        controllers: [ala_controller_1.AlaController],
        providers: [ala_service_1.AlaService],
        exports: [AlaModule_1],
    })
], AlaModule);
exports.AlaModule = AlaModule;
//# sourceMappingURL=ala.module.js.map