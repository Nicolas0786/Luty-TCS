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
exports.Etiqueta = void 0;
const usuario_entity_1 = require("../../usuario/entities/usuario.entity");
const typeorm_1 = require("typeorm");
let Etiqueta = class Etiqueta {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Etiqueta.prototype, "idEtiqueta", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 50 }),
    __metadata("design:type", String)
], Etiqueta.prototype, "ipEtiqueta", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 50 }),
    __metadata("design:type", String)
], Etiqueta.prototype, "nomeEtiqueta", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Etiqueta.prototype, "statusEtiqueta", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 250 }),
    __metadata("design:type", String)
], Etiqueta.prototype, "hashEtiqueta", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 80 }),
    __metadata("design:type", String)
], Etiqueta.prototype, "corredor", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 80 }),
    __metadata("design:type", String)
], Etiqueta.prototype, "pratilheira", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, (usuario) => usuario.etiquetas),
    __metadata("design:type", usuario_entity_1.Usuario)
], Etiqueta.prototype, "usuario", void 0);
Etiqueta = __decorate([
    (0, typeorm_1.Entity)()
], Etiqueta);
exports.Etiqueta = Etiqueta;
//# sourceMappingURL=etiqueta.entity.js.map