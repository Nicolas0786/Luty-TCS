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
exports.ProdutoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const produto_entity_1 = require("./entities/produto.entity");
const produtoEtiqueta_1 = require("../etiqueta/entities/produtoEtiqueta");
let ProdutoService = class ProdutoService {
    constructor(repositorioProduto, repositorioProdutoEtiqueta) {
        this.repositorioProduto = repositorioProduto;
        this.repositorioProdutoEtiqueta = repositorioProdutoEtiqueta;
    }
    async create(createProdutoDto) {
        if (!Number(createProdutoDto.codigoEan)) {
            throw new common_1.HttpException("Neste campo Código Ean so podem conter caracteres númericos", common_1.HttpStatus.BAD_REQUEST);
        }
        else if (createProdutoDto.codigoEan < 0) {
            throw new common_1.HttpException("O codigo ean não pode ser negativo", common_1.HttpStatus.FORBIDDEN);
        }
        else if (createProdutoDto.codigoEan.toString().length > 14) {
            throw new common_1.HttpException("O codigo ean não pode conter mais de 13 caracteres", common_1.HttpStatus.FORBIDDEN);
        }
        if (createProdutoDto.custo <= 0) {
            throw new common_1.HttpException("O custo não pode ser negativo e nem zerado", common_1.HttpStatus.FORBIDDEN);
        }
        if (createProdutoDto.porcentagem <= 0) {
            throw new common_1.HttpException("A porcentagem não pode ser negativa e nem zerada", common_1.HttpStatus.FORBIDDEN);
        }
        if (createProdutoDto.quantidade <= 0) {
            throw new common_1.HttpException("A quantidade não pode ser negativa e nem zerada", common_1.HttpStatus.FORBIDDEN);
        }
        const CodigoEanExists = await this.repositorioProduto.findOneBy({
            codigoEan: createProdutoDto.codigoEan
        });
        if (CodigoEanExists) {
            throw new common_1.HttpException("Já tem produto cadastrado com esse codigo Ean", common_1.HttpStatus.FORBIDDEN);
        }
        const produto = new produto_entity_1.Produto();
        let porcen = createProdutoDto.porcentagem;
        let novaPorcentagem = porcen / 100;
        let precoCusto = createProdutoDto.custo;
        let precoo = precoCusto * novaPorcentagem + precoCusto;
        produto.codigoEan = createProdutoDto.codigoEan;
        produto.descricaoProduto = createProdutoDto.descricaoProduto;
        produto.preco = precoo;
        produto.grupos = createProdutoDto.grupos;
        produto.alas = createProdutoDto.alas;
        produto.quantidade = createProdutoDto.quantidade;
        produto.custo = createProdutoDto.custo;
        produto.porcentagem = createProdutoDto.porcentagem;
        produto.grupos = createProdutoDto.grupos;
        produto.alas = createProdutoDto.alas;
        produto.usuario = createProdutoDto.usuario;
        if (createProdutoDto.statusProduto === undefined) {
            produto.statusProduto = 1;
        }
        else {
            produto.statusProduto = createProdutoDto.statusProduto;
        }
        this.repositorioProduto.save(produto);
        return new common_1.HttpException("Produto cadastrado com sucesso", common_1.HttpStatus.OK);
    }
    findAll() {
        return this.repositorioProduto.find({
            select: {
                idProduto: true,
                codigoEan: true,
                descricaoProduto: true,
                quantidade: true,
                preco: true,
                statusProduto: true,
            },
            relations: {
                grupos: true,
                alas: true,
            },
        });
    }
    findOne(codigoEan) {
        return this.repositorioProduto.findOneBy({ codigoEan });
    }
    findOneBy(idProduto) {
        return this.repositorioProduto.findOne({
            select: {
                idProduto: true,
                codigoEan: true,
                descricaoProduto: true,
                quantidade: true,
                porcentagem: true,
                custo: true,
                preco: true,
            },
            relations: {
                grupos: true,
                alas: true,
            },
            where: {
                idProduto
            }
        });
    }
    async update(idProduto, updateProdutoDto) {
        const produto = new produto_entity_1.Produto();
        const coluns = await this.repositorioProduto.findOne({
            select: {
                idProduto: true,
                codigoEan: true,
                descricaoProduto: true,
                quantidade: true,
                custo: true,
                porcentagem: true,
                statusProduto: true,
            }, relations: {
                grupos: true,
                alas: true,
            }, where: {
                idProduto
            }
        });
        const ultimoProdutoEtiqueta = await this.repositorioProdutoEtiqueta.query(`select max(idProdutoEtiqueta), max(produtoIdProduto) from produto_etiqueta  inner join produto on produto.idProduto = produto_etiqueta.produtoIdProduto`);
        const produtoNaEtiqueta = Object.values(ultimoProdutoEtiqueta[0])[1];
        console.log('banco', produtoNaEtiqueta, 'aplica', idProduto);
        const codigoEanExists = await this.repositorioProduto.findOneBy({
            codigoEan: updateProdutoDto.codigoEan
        });
        if (updateProdutoDto.codigoEan === undefined || updateProdutoDto.codigoEan.toString() === "") {
            produto.codigoEan = coluns.codigoEan;
        }
        else {
            if (codigoEanExists) {
                throw new common_1.HttpException("Esse codigo ean já esta sendo utilizado", common_1.HttpStatus.FORBIDDEN);
            }
            if (!Number(updateProdutoDto.codigoEan)) {
                throw new common_1.HttpException("So pode conter número no campo Código Ean", common_1.HttpStatus.FORBIDDEN);
            }
            else if (updateProdutoDto.codigoEan < 0) {
                throw new common_1.HttpException("O codigo ean não pode ser negativo", common_1.HttpStatus.FORBIDDEN);
            }
            else if (updateProdutoDto.codigoEan.toString().length > 14) {
                throw new common_1.HttpException("O codigo ean não pode conter mais de 14 caracteres", common_1.HttpStatus.FORBIDDEN);
            }
            produto.codigoEan = updateProdutoDto.codigoEan;
        }
        if (updateProdutoDto.descricaoProduto === undefined || updateProdutoDto.descricaoProduto.toString() === '') {
            produto.descricaoProduto = coluns.descricaoProduto;
        }
        else {
            produto.descricaoProduto = updateProdutoDto.descricaoProduto;
        }
        if (updateProdutoDto.quantidade === undefined || updateProdutoDto.quantidade.toString() === "") {
            produto.quantidade = coluns.quantidade;
        }
        else {
            if (updateProdutoDto.quantidade <= 0) {
                throw new common_1.HttpException("A quantidade não pode ser negativa e nem zerada", common_1.HttpStatus.FORBIDDEN);
            }
            else if (!Number(updateProdutoDto.quantidade)) {
                throw new common_1.HttpException("So pode conter número no campo Quantidade", common_1.HttpStatus.FORBIDDEN);
            }
            produto.quantidade = updateProdutoDto.quantidade;
        }
        if (updateProdutoDto.custo === undefined || updateProdutoDto.custo.toString() === "") {
            produto.custo = coluns.custo;
        }
        else {
            if (updateProdutoDto.custo <= 0) {
                throw new common_1.HttpException("O custo não pode ser negativo e nem zerado", common_1.HttpStatus.FORBIDDEN);
            }
            else if (!Number(updateProdutoDto.custo)) {
                throw new common_1.HttpException("So pode conter número no campo Custo", common_1.HttpStatus.FORBIDDEN);
            }
            produto.custo = updateProdutoDto.custo;
        }
        if (updateProdutoDto.porcentagem === undefined || updateProdutoDto.porcentagem.toString() === "") {
            produto.porcentagem = coluns.porcentagem;
        }
        else {
            if (updateProdutoDto.porcentagem <= 0) {
                throw new common_1.HttpException("A porcentagem não pode ser negativa e nem zerada", common_1.HttpStatus.FORBIDDEN);
            }
            else if (!Number(updateProdutoDto.porcentagem)) {
                throw new common_1.HttpException("So pode conter número no campo Porcentagem", common_1.HttpStatus.FORBIDDEN);
            }
            produto.porcentagem = updateProdutoDto.porcentagem;
        }
        if (updateProdutoDto.statusProduto === undefined) {
            produto.statusProduto = coluns.statusProduto;
        }
        else {
            if (updateProdutoDto.statusProduto === 0) {
                if (produtoNaEtiqueta === idProduto) {
                    throw new common_1.HttpException("Esse produto está sendo ultilizado na etiqueta", common_1.HttpStatus.FORBIDDEN);
                }
                else {
                    produto.statusProduto = updateProdutoDto.statusProduto;
                }
            }
            else {
                produto.statusProduto = updateProdutoDto.statusProduto;
            }
        }
        if (updateProdutoDto.alas === undefined || updateProdutoDto.alas.toString() === '') {
            produto.alas = coluns.alas;
        }
        else {
            produto.alas = updateProdutoDto.alas;
        }
        if (updateProdutoDto.grupos === undefined || updateProdutoDto.grupos.toString() === '') {
            produto.grupos = coluns.grupos;
        }
        else {
            produto.grupos = updateProdutoDto.grupos;
        }
        let porcen = produto.porcentagem;
        let novaPorcentagem = porcen / 100;
        let precoCusto = produto.custo;
        let precoo = precoCusto * novaPorcentagem + parseFloat(precoCusto.toString());
        produto.preco = precoo;
        this.repositorioProduto.update(idProduto, produto);
        return new common_1.HttpException("Produto alterado com sucesso", common_1.HttpStatus.OK);
    }
};
ProdutoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(produto_entity_1.Produto)),
    __param(1, (0, typeorm_1.InjectRepository)(produtoEtiqueta_1.ProdutoEtiqueta)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProdutoService);
exports.ProdutoService = ProdutoService;
//# sourceMappingURL=produto.service.js.map