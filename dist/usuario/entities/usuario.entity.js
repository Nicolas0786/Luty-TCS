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
exports.Usuario = void 0;
const ala_entity_1 = require("../../ala/entities/ala.entity");
const etiqueta_entity_1 = require("../../etiqueta/entities/etiqueta.entity");
const grupo_entity_1 = require("../../grupo/entities/grupo.entity");
const produto_entity_1 = require("../../produto/entities/produto.entity");
const typeorm_1 = require("typeorm");
const permissao_entity_1 = require("./permissao.entity");
let Usuario = class Usuario {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Usuario.prototype, "idUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 80 }),
    __metadata("design:type", String)
], Usuario.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", String)
], Usuario.prototype, "matricula", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 50 }),
    __metadata("design:type", String)
], Usuario.prototype, "login", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 80 }),
    __metadata("design:type", String)
], Usuario.prototype, "senha", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Usuario.prototype, "statusUsuario", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => produto_entity_1.Produto, (produto) => produto.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "produtos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ala_entity_1.Ala, (ala) => ala.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "alas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => grupo_entity_1.Grupo, (grupo) => grupo.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "grupos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => etiqueta_entity_1.Etiqueta, (etiqueta) => etiqueta.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "etiquetas", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => permissao_entity_1.Permissao, (permissao) => permissao.usuario),
    __metadata("design:type", permissao_entity_1.Permissao)
], Usuario.prototype, "permissao", void 0);
Usuario = __decorate([
    (0, typeorm_1.Entity)()
], Usuario);
exports.Usuario = Usuario;
//# sourceMappingURL=usuario.entity.js.map