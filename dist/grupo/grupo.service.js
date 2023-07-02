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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrupoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const grupo_entity_1 = require("./entities/grupo.entity");
let GrupoService = class GrupoService {
    constructor(repositorioGrupo) {
        this.repositorioGrupo = repositorioGrupo;
    }
    create(createGrupoDto) {
        const Grup = new grupo_entity_1.Grupo;
        Grup.descricaoGrupo = createGrupoDto.descricaoGrupo;
        Grup.usuario = createGrupoDto.usuario;
        return this.repositorioGrupo.save(Grup);
    }
    findAll() {
        return this.repositorioGrupo.find();
    }
    findOne(id) {
        return `This action returns a #${id} grupo`;
    }
    update(idGrupo, updateGrupoDto) {
        const grupo = new grupo_entity_1.Grupo;
        grupo.descricaoGrupo = updateGrupoDto.descricaoGrupo;
        return this.repositorioGrupo.update(idGrupo, grupo);
    }
};
GrupoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(grupo_entity_1.Grupo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GrupoService);
exports.GrupoService = GrupoService;
//# sourceMappingURL=grupo.service.js.map