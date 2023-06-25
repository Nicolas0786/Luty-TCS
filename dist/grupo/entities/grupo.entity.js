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
exports.Grupo = void 0;
const typeorm_1 = require("typeorm");
const produto_entity_1 = require("../../produto/entities/produto.entity");
const usuario_entity_1 = require("../../usuario/entities/usuario.entity");
let Grupo = class Grupo {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Grupo.prototype, "idGrupo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 13 }),
    __metadata("design:type", String)
], Grupo.prototype, "descricaoGrupo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => produto_entity_1.Produto, (produto) => produto.grupos),
    __metadata("design:type", Array)
], Grupo.prototype, "produtos", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, (usuario) => usuario.grupos),
    __metadata("design:type", usuario_entity_1.Usuario)
], Grupo.prototype, "usuario", void 0);
Grupo = __decorate([
    (0, typeorm_1.Entity)()
], Grupo);
exports.Grupo = Grupo;
//# sourceMappingURL=grupo.entity.js.map