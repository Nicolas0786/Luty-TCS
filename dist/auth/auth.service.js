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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const usuario_service_1 = require("../usuario/usuario.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usuarioService, jwtService) {
        this.usuarioService = usuarioService;
        this.jwtService = jwtService;
    }
    async validarUsuario(username, password) {
        const usuario = await this.usuarioService.findOneBy(username);
        if (usuario === null) {
            throw new common_1.HttpException("Usuario não encontrado", common_1.HttpStatus.FORBIDDEN);
        }
        else if (usuario.statusUsuario === 0) {
            throw new common_1.HttpException("O usuario está desativado e não pode logar", common_1.HttpStatus.FORBIDDEN);
        }
        if (username == usuario.login && await bcrypt.compare(password, usuario.senha)) {
            console.log('cert');
            const payload = { permissao: usuario.permissao, username: usuario.login, idUsuario: usuario.idUsuario, sub: usuario.idUsuario };
            console.log(payload);
            return {
                access_token: this.jwtService.sign(payload),
            };
        }
        else {
            throw new common_1.HttpException("Verifique a senha e o Usuario", common_1.HttpStatus.FORBIDDEN);
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map