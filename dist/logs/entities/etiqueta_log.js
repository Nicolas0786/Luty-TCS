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
exports.etiqueta_log = void 0;
const typeorm_1 = require("typeorm");
let etiqueta_log = class etiqueta_log {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], etiqueta_log.prototype, "idlog_etiqueta", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime'),
    __metadata("design:type", Date)
], etiqueta_log.prototype, "dtacao", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 10 }),
    __metadata("design:type", String)
], etiqueta_log.prototype, "acao", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], etiqueta_log.prototype, "idEtiqueta", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], etiqueta_log.prototype, "usuarioIdUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 50 }),
    __metadata("design:type", String)
], etiqueta_log.prototype, "ipEtiqueta", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 50 }),
    __metadata("design:type", String)
], etiqueta_log.prototype, "nomeEtiqueta", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], etiqueta_log.prototype, "statusEtiqueta", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 80 }),
    __metadata("design:type", String)
], etiqueta_log.prototype, "corredor", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 80 }),
    __metadata("design:type", String)
], etiqueta_log.prototype, "pratilheira", void 0);
etiqueta_log = __decorate([
    (0, typeorm_1.Entity)()
], etiqueta_log);
exports.etiqueta_log = etiqueta_log;
//# sourceMappingURL=etiqueta_log.js.map