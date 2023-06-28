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
var EtiquetaService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtiquetaService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const etiqueta_entity_1 = require("./entities/etiqueta.entity");
const bcrypt = require("bcrypt");
const produto_entity_1 = require("../produto/entities/produto.entity");
const produtoEtiqueta_1 = require("./entities/produtoEtiqueta");
let EtiquetaService = EtiquetaService_1 = class EtiquetaService {
    constructor(repositorioEtiqueta, http, repositorioProduto, repositorioProdutoEtiqueta) {
        this.repositorioEtiqueta = repositorioEtiqueta;
        this.http = http;
        this.repositorioProduto = repositorioProduto;
        this.repositorioProdutoEtiqueta = repositorioProdutoEtiqueta;
        this.logger = new common_1.Logger(EtiquetaService_1.name);
    }
    async cadastrar(createEtiquetaDto) {
        const etiq = new etiqueta_entity_1.Etiqueta();
        try {
            const ipExistis = await this.repositorioEtiqueta.findOneBy({ ipEtiqueta: createEtiquetaDto.ipEtiqueta });
            if (ipExistis) {
                throw new common_1.HttpException("Esse iP já está sendo usado por outra Etiqueta", common_1.HttpStatus.FORBIDDEN);
            }
            else {
                const ip = createEtiquetaDto.ipEtiqueta;
                const ipp2 = 'http://' + ip + '/protect';
                const response = await this.http.get(ipp2).toPromise();
                new common_1.HttpException("Comunicando com o Ip", common_1.HttpStatus.FORBIDDEN);
                if (response.status === 200) {
                    etiq.ipEtiqueta = createEtiquetaDto.ipEtiqueta;
                    new common_1.HttpException("Comunicação concluida", common_1.HttpStatus.OK);
                    const chave = await bcrypt.hashSync(createEtiquetaDto.ipEtiqueta, 1);
                    const response = await this.http.post(ipp2, chave.toString()).toPromise();
                    etiq.hashEtiqueta = chave.toString();
                    etiq.nomeEtiqueta = createEtiquetaDto.nomeEtiqueta;
                    etiq.corredor = createEtiquetaDto.corredor;
                    etiq.pratilheira = createEtiquetaDto.pratilheira;
                    if (createEtiquetaDto.statusEtiqueta === undefined) {
                        etiq.statusEtiqueta = 0;
                    }
                    else {
                        etiq.statusEtiqueta = createEtiquetaDto.statusEtiqueta;
                    }
                    etiq.usuario = createEtiquetaDto.usuario;
                }
            }
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException('Verifique a comunicação com a Etiqueta', common_1.HttpStatus.FORBIDDEN);
        }
        this.repositorioEtiqueta.save(etiq);
        return new common_1.HttpException('Etiqueta Cadastrada com Sucesso', common_1.HttpStatus.OK);
    }
    findAll() {
        return this.repositorioEtiqueta.find({
            select: {
                idEtiqueta: true,
                ipEtiqueta: true,
                nomeEtiqueta: true,
                corredor: true,
                pratilheira: true
            }
        });
    }
    findOne(nomeEtiqueta) {
        return this.repositorioEtiqueta.findOne({
            select: {
                idEtiqueta: true,
                ipEtiqueta: true,
                nomeEtiqueta: true,
            }, where: {
                nomeEtiqueta
            }
        });
    }
    async update(idEtiqueta, updateEtiquetaDto) {
        const etiqueta = new etiqueta_entity_1.Etiqueta();
        const oneEtiqueta = await this.repositorioEtiqueta.findOne({
            select: {
                ipEtiqueta: true,
                nomeEtiqueta: true,
                statusEtiqueta: true,
                corredor: true,
                pratilheira: true
            }, where: {
                idEtiqueta
            }
        });
        try {
            if (updateEtiquetaDto.ipEtiqueta === undefined) {
                etiqueta.ipEtiqueta = oneEtiqueta.ipEtiqueta;
            }
            else {
                try {
                    const ipp2 = 'http://' + updateEtiquetaDto.ipEtiqueta;
                    +'/protect';
                    const response = await this.http.get(ipp2).toPromise();
                    if (response.status === 200) {
                        etiqueta.ipEtiqueta = updateEtiquetaDto.ipEtiqueta;
                    }
                }
                catch (error) {
                    console.log(error, "erro ao atualizar");
                    throw new common_1.HttpException('Verifique a comunicação com a Etiqueta', common_1.HttpStatus.FORBIDDEN);
                }
            }
            if (updateEtiquetaDto.nomeEtiqueta === undefined) {
                etiqueta.nomeEtiqueta = oneEtiqueta.nomeEtiqueta;
            }
            else {
                etiqueta.nomeEtiqueta = updateEtiquetaDto.nomeEtiqueta;
            }
            if (updateEtiquetaDto.statusEtiqueta === undefined) {
                etiqueta.statusEtiqueta = oneEtiqueta.statusEtiqueta;
            }
            else {
                etiqueta.statusEtiqueta = updateEtiquetaDto.statusEtiqueta;
            }
            if (updateEtiquetaDto.corredor === undefined) {
                etiqueta.corredor = oneEtiqueta.corredor;
            }
            else {
                etiqueta.corredor = updateEtiquetaDto.corredor;
            }
            if (updateEtiquetaDto.pratilheira === undefined) {
                etiqueta.pratilheira = oneEtiqueta.pratilheira;
            }
            else {
                etiqueta.pratilheira = updateEtiquetaDto.pratilheira;
            }
        }
        catch (error) {
            throw new common_1.HttpException("Não foi possivel atualizar as informações da Etiqueta", common_1.HttpStatus.FORBIDDEN);
        }
        this.repositorioEtiqueta.update(idEtiqueta, etiqueta);
        return new common_1.HttpException("Etiqueta Atualizada com Sucesso", common_1.HttpStatus.OK);
    }
    async mandarPrecoEtiqueta(precoEtiqueta) {
        const prodEtiq = new produtoEtiqueta_1.ProdutoEtiqueta();
        const etiq = await this.repositorioEtiqueta.findOneBy({
            idEtiqueta: precoEtiqueta.idEtiqueta
        });
        const prod = await this.repositorioProduto.findOneBy({
            idProduto: precoEtiqueta.idProduto
        });
        try {
            const ipp2 = 'http://' + etiq.ipEtiqueta + '/produto';
            const produto = prod.descricaoProduto.toUpperCase() + "," + "R$ " + prod.preco + "," + "Ean: " + prod.codigoEan + "," + etiq.hashEtiqueta;
            const response = await this.http.post(ipp2, produto).toPromise();
            return response.data;
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException("Não foi possivel enviar o produto para a etiqueta", common_1.HttpStatus.FORBIDDEN);
        }
    }
};
EtiquetaService = EtiquetaService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(etiqueta_entity_1.Etiqueta)),
    __param(2, (0, typeorm_1.InjectRepository)(produto_entity_1.Produto)),
    __param(3, (0, typeorm_1.InjectRepository)(produtoEtiqueta_1.ProdutoEtiqueta)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        axios_1.HttpService,
        typeorm_2.Repository,
        typeorm_2.Repository])
], EtiquetaService);
exports.EtiquetaService = EtiquetaService;
//# sourceMappingURL=etiqueta.service.js.map