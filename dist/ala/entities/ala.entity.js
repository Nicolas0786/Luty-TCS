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
exports.Ala = void 0;
const produto_entity_1 = require("../../produto/entities/produto.entity");
const usuario_entity_1 = require("../../usuario/entities/usuario.entity");
const typeorm_1 = require("typeorm");
let Ala = class Ala {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Ala.prototype, "idAla", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 13 }),
    __metadata("design:type", String)
], Ala.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => produto_entity_1.Produto, (produto) => produto.alas),
    __metadata("design:type", Array)
], Ala.prototype, "produtos", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, (usuario) => usuario.alas),
    __metadata("design:type", usuario_entity_1.Usuario)
], Ala.prototype, "usuario", void 0);
Ala = __decorate([
    (0, typeorm_1.Entity)()
], Ala);
exports.Ala = Ala;
//# sourceMappingURL=ala.entity.js.map