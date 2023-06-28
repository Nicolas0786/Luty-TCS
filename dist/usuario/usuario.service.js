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
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const usuario_entity_1 = require("./entities/usuario.entity");
const bcrypt = require("bcrypt");
let UsuarioService = class UsuarioService {
    constructor(repositorioUsuario) {
        this.repositorioUsuario = repositorioUsuario;
    }
    async create(createUsuarioDto) {
        const user = new usuario_entity_1.Usuario;
        const loginExists = await this.repositorioUsuario.findOneBy({ login: createUsuarioDto.login });
        const matriculaExist = await this.repositorioUsuario.findOneBy({ matricula: createUsuarioDto.matricula });
        if (loginExists) {
            throw new common_1.HttpException("Esse login já está sendo utilizado", common_1.HttpStatus.FORBIDDEN);
        }
        if (matriculaExist) {
            throw new Error("Essa Matricula já está cadastrada");
        }
        user.nome = createUsuarioDto.nome;
        user.matricula = createUsuarioDto.matricula;
        user.login = createUsuarioDto.login;
        user.senha = await bcrypt.hashSync(createUsuarioDto.senha, 8);
        user.permissao = createUsuarioDto.permissao;
        if (createUsuarioDto.statusUsuario === undefined) {
            user.statusUsuario = 0;
        }
        else {
            user.statusUsuario = createUsuarioDto.statusUsuario;
        }
        return this.repositorioUsuario.save(user);
    }
    findAll() {
        return this.repositorioUsuario.find({
            select: {
                nome: true,
                matricula: true,
                login: true,
            }, where: {
                statusUsuario: 0
            }
        });
    }
    findOne(nome) {
        return this.repositorioUsuario.findOne({
            select: {
                nome: true,
                matricula: true,
                login: true,
            }, where: {
                nome,
                statusUsuario: 0
            }
        });
    }
    buscarLogin(login) {
        return this.repositorioUsuario.findOne({
            select: {
                idUsuario: true,
                nome: true,
                matricula: true,
                login: true,
            }, relations: {
                permissao: true,
            }, where: {
                login,
                statusUsuario: 0
            }
        });
    }
    async update(idUsuario, updateUsuarioDto) {
        console.log('chegou', updateUsuarioDto);
        console.log('outro teste', updateUsuarioDto.matricula);
        const user = new usuario_entity_1.Usuario();
        const userOne = await this.repositorioUsuario.findOne({
            select: {
                idUsuario: true,
                nome: true,
                matricula: true,
                login: true,
                senha: true,
                statusUsuario: true
            }, relations: {
                permissao: true,
            }, where: {
                idUsuario
            }
        });
        const loginExists = await this.repositorioUsuario.findOneBy({ login: updateUsuarioDto.login });
        const matriculaExist = await this.repositorioUsuario.findOneBy({ matricula: updateUsuarioDto.matricula });
        if (updateUsuarioDto.nome === undefined) {
            user.nome = userOne.nome;
        }
        else {
            user.nome = updateUsuarioDto.nome;
        }
        if (updateUsuarioDto.matricula === undefined) {
            user.matricula = userOne.matricula;
        }
        else {
            if (matriculaExist) {
                throw new common_1.HttpException("Essa matricula já está sendo utilizada", common_1.HttpStatus.FORBIDDEN);
            }
            user.matricula = updateUsuarioDto.matricula;
        }
        if (updateUsuarioDto.login === undefined) {
            user.login = userOne.login;
        }
        else {
            if (loginExists) {
                throw new common_1.HttpException("Esse login já está sendo utilizado", common_1.HttpStatus.FORBIDDEN);
            }
            user.login = updateUsuarioDto.login;
        }
        if (updateUsuarioDto.senha === undefined) {
            user.senha = userOne.senha;
        }
        else {
            user.senha = await bcrypt.hashSync(updateUsuarioDto.senha, 8);
        }
        if (updateUsuarioDto.statusUsuario === undefined) {
            user.statusUsuario = userOne.statusUsuario;
        }
        else {
            user.statusUsuario = updateUsuarioDto.statusUsuario;
        }
        if (updateUsuarioDto.permissao === undefined) {
            user.permissao = userOne.permissao;
        }
        else {
            user.permissao = updateUsuarioDto.permissao;
        }
        return this.repositorioUsuario.update(idUsuario, user);
    }
    async findOneBy(username) {
        const login = username;
        return await this.repositorioUsuario.findOne({
            select: {
                idUsuario: true,
                login: true,
                senha: true,
            }, relations: {
                permissao: true,
            }, where: {
                login
            }
        });
    }
};
UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map