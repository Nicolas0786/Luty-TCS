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
exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const usuario_service_1 = require("./usuario/usuario.service");
const jwt_decode_1 = require("jwt-decode");
let RolesGuard = class RolesGuard {
    constructor(reflector, usuarioService) {
        this.reflector = reflector;
        this.usuarioService = usuarioService;
    }
    async canActivate(context) {
        const token = context.getArgs()[0].headers.authentication.split(' ')[1];
        const { login } = (0, jwt_decode_1.default)(context.getArgs()[0].headers.authentication.split(' ')[1]);
        const usuario = await this.usuarioService.findOne(login);
        const roles = this.reflector.get('roles', context.getHandler());
        const total_roles = roles.filter(role => role === login.role);
        if (total_roles.length >= 1) {
            return true;
        }
        else {
            return false;
        }
    }
};
RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        usuario_service_1.UsuarioService])
], RolesGuard);
exports.RolesGuard = RolesGuard;
//# sourceMappingURL=roles.guard.js.map