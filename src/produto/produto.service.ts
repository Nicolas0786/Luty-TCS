/* eslint-disable prefer-const */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { response } from 'express';
import { createQuery } from 'mysql2/typings/mysql/lib/Connection';
import { parse } from 'path';
import { Etiqueta } from 'src/etiqueta/entities/etiqueta.entity';
import { Grupo } from 'src/grupo/entities/grupo.entity';
import { Column, createQueryBuilder, getRepository, Repository } from 'typeorm';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutoService {

  constructor(
    @InjectRepository(Produto)
    private repositorioProduto: Repository<Produto>,
    
  ) {}


  async create(createProdutoDto: CreateProdutoDto) {

    if(!Number(createProdutoDto.codigoEan)){
      throw new HttpException("Neste campo Código Ean so podem conter caracteres númericos", HttpStatus.BAD_REQUEST);
    }else if(createProdutoDto.codigoEan < 0){
      throw new HttpException("O codigo ean não pode ser negativo", HttpStatus.FORBIDDEN);
    }else if(createProdutoDto.codigoEan.toString().length > 14){
      throw new HttpException("O codigo ean não pode conter mais de 13 caracteres", HttpStatus.FORBIDDEN);
    }

    if(createProdutoDto.custo <= 0 ){
      throw new HttpException("O custo não pode ser negativo e nem zerado", HttpStatus.FORBIDDEN);
    }

    if(createProdutoDto.porcentagem <= 0){
      throw new HttpException("A porcentagem não pode ser negativa e nem zerada", HttpStatus.FORBIDDEN);
    }
    if(createProdutoDto.quantidade <=0){
      throw new HttpException("A quantidade não pode ser negativa e nem zerada", HttpStatus.FORBIDDEN);
    }

    const CodigoEanExists:Produto = await this.repositorioProduto.findOneBy({
      
        codigoEan: createProdutoDto.codigoEan
      
    }); 

    if(CodigoEanExists){
     throw new HttpException("Já tem produto cadastrado com esse codigo Ean", HttpStatus.FORBIDDEN);
    }

    const produto = new Produto();
    
    let porcen: number = createProdutoDto.porcentagem;
  
    let novaPorcentagem: number = porcen/100;

    let precoCusto:number = createProdutoDto.custo;
    
    let precoo:number = precoCusto * novaPorcentagem + precoCusto;

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

    if(createProdutoDto.statusProduto === undefined){
      produto.statusProduto = 0;
    } else{
      produto.statusProduto = createProdutoDto.statusProduto
    }
    
    this.repositorioProduto.save(produto)


   return new HttpException("Produto cadastrado com sucesso", HttpStatus.OK);
  }


    findAll():Promise<Produto[]> {
      return   this.repositorioProduto.find({
        
          select:{
            idProduto: true,
            codigoEan: true,
            descricaoProduto: true,
            quantidade: true,
            preco: true,
  
          },
          relations: {
            grupos:true,
            alas: true,
         },
      })

      
    }



  findOne(codigoEan: number): Promise<Produto> {
    return this.repositorioProduto.findOneBy({codigoEan});
  }


  findOneBy(idProduto: number): Promise<Produto>{
    return this.repositorioProduto.findOne({
      select:{
        idProduto: true,
        codigoEan: true,
        descricaoProduto: true,
        quantidade: true,
        porcentagem: true,
        custo: true,
        preco: true,

      },
      relations: {
        grupos:true,
        alas: true,
     },
     where:{
      idProduto
     }
    })
  }
  

  async update(idProduto: number, updateProdutoDto: UpdateProdutoDto) {

    const produto = new Produto();
    console.log('ala',updateProdutoDto.alas)

    const coluns:Produto = await this.repositorioProduto.findOne({
      select: {
        idProduto:true,
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
    })

    console.log('aa',coluns.alas);

    const codigoEanExists: Produto = await this.repositorioProduto.findOneBy({
     codigoEan: updateProdutoDto.codigoEan
    });

//console.log(coluns);

if(updateProdutoDto.codigoEan === undefined){
  produto.codigoEan = coluns.codigoEan;
}else{
  if(codigoEanExists){
    throw new HttpException("Esse codigo ean já esta sendo utilizado", HttpStatus.BAD_REQUEST);
  }
  if(!Number(updateProdutoDto.codigoEan)){
    throw new HttpException("So pode conter número no campo Código Ean", HttpStatus.BAD_REQUEST);
  }else if(updateProdutoDto.codigoEan < 0){
    throw new HttpException("O codigo ean não pode ser negativo", HttpStatus.FORBIDDEN);
  }else if(updateProdutoDto.codigoEan.toString().length > 14){
    throw new HttpException("O codigo ean não pode conter mais de 14 caracteres", HttpStatus.FORBIDDEN);
  }

produto.codigoEan = updateProdutoDto.codigoEan;

}


if(updateProdutoDto.descricaoProduto === undefined || updateProdutoDto.descricaoProduto.toString() === ''){
  produto.descricaoProduto = coluns.descricaoProduto;

}else{
  produto.descricaoProduto = updateProdutoDto.descricaoProduto;

}
if(updateProdutoDto.quantidade === undefined){
  produto.quantidade = coluns.quantidade;

}else{
  if(updateProdutoDto.quantidade <=0){
    throw new HttpException("A quantidade não pode ser negativa e nem zerada", HttpStatus.FORBIDDEN);
  }
  produto.quantidade = updateProdutoDto.quantidade;

}
if(updateProdutoDto.custo === undefined){
  produto.custo = coluns.custo;

}else{
  if(updateProdutoDto.custo <= 0 ){
    throw new HttpException("O custo não pode ser negativo e nem zerado", HttpStatus.FORBIDDEN);
  }
  produto.custo = updateProdutoDto.custo;

}
if(updateProdutoDto.porcentagem === undefined){
  produto.porcentagem = coluns.porcentagem

}else{
  if(updateProdutoDto.porcentagem <= 0){
    throw new HttpException("A porcentagem não pode ser negativa e nem zerada", HttpStatus.FORBIDDEN);
  }
  produto.porcentagem = updateProdutoDto.porcentagem;

}
if(updateProdutoDto.statusProduto === undefined){
  produto.statusProduto = coluns.statusProduto

}else{
  produto.statusProduto = updateProdutoDto.statusProduto;

}

if(updateProdutoDto.alas === undefined || updateProdutoDto.alas.toString() === ''){
  produto.alas = coluns.alas;
}else{
  produto.alas = updateProdutoDto.alas;
}

if(updateProdutoDto.grupos === undefined || updateProdutoDto.grupos.toString() === ''){
  produto.grupos = coluns.grupos;
}else{
  produto.grupos = updateProdutoDto.grupos;
}

    
    let porcen: number = produto.porcentagem;
  
    let novaPorcentagem: number = porcen/100;

    let precoCusto: number = produto.custo;   
    
    let precoo: number =  precoCusto * novaPorcentagem + parseFloat(precoCusto.toString());

    produto.preco = precoo;

    this.repositorioProduto.update(idProduto, produto);

    return new HttpException("Produto alterado com sucesso", HttpStatus.OK);
  }


}


