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
exports.grupo_log = void 0;
const typeorm_1 = require("typeorm");
let grupo_log = class grupo_log {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], grupo_log.prototype, "idlog_grupo", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime'),
    __metadata("design:type", Date)
], grupo_log.prototype, "dtacao", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 10 }),
    __metadata("design:type", String)
], grupo_log.prototype, "acao", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], grupo_log.prototype, "idGrupo", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], grupo_log.prototype, "usuarioIdUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 13 }),
    __metadata("design:type", String)
], grupo_log.prototype, "descricaoGrupo", void 0);
grupo_log = __decorate([
    (0, typeorm_1.Entity)()
], grupo_log);
exports.grupo_log = grupo_log;
//# sourceMappingURL=grupo_log.js.map