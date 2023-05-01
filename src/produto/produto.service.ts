/* eslint-disable prefer-const */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { response } from 'express';
import { createQuery } from 'mysql2/typings/mysql/lib/Connection';
import { parse } from 'path';
import { Etiqueta } from 'src/etiqueta/entities/etiqueta.entity';
import { Grupo } from 'src/grupo/entities/grupo.entity';
import { createQueryBuilder, getRepository, Repository } from 'typeorm';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutoService {

  constructor(
    @InjectRepository(Produto)
    private repositorioProduto: Repository<Produto>,
    
    @InjectRepository(Etiqueta)
    private repositorioEtiqueta: Repository<Etiqueta>
  ) {}


  async create(createProdutoDto: CreateProdutoDto) {

    if(!Number(createProdutoDto.codigoEan)){
      throw new Error("So pode conter número no campo Código Ean");
    }

    const CodigoEanExists = await this.repositorioProduto.findOneBy({
      
        codigoEan: createProdutoDto.codigoEan
      
    }); 

    if(CodigoEanExists){
     throw new Error("Produto ja existente");
     //response.statusMessage = "Produto ja existente";
    }

    const produto = new Produto();
    
    let porcen: number = createProdutoDto.porcentagem;
  
    let novaPorcentagem: number = porcen/100;

  
    let precoCusto = createProdutoDto.custo;
    
  
    let precoo = (parseFloat(precoCusto) * novaPorcentagem) + parseFloat(precoCusto);


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

    

    //console.log("novaPorce", novaPorcentagem);
    //console.log("custo", precoCusto)
    //console.log("preco", precoo)


    return this.repositorioProduto.save(produto);
  }

  /*findAll(){
    const query = createQuery('select idproduto from produto')
    query.start
  }*/


    
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
         },
      })

      
    }


    tes(){

      let ts = {} = this.repositorioProduto.find({
        
        select:{
          idProduto: true,
          codigoEan: true,
          descricaoProduto: true,
          quantidade: true,
          preco: true,

        },
        relations: {
          grupos:true,
       },
    })

    console.log(ts)
    }

  /*findAll() :Promise<Produto[]>  {
    /*return this.repositorioProduto.find({
      select: {

        idProduto: true,
        codigoEan: true,
        descricaoProduto: true,
        //grupo: true,
        quantidade: true,
        preco: true
        
      },
    });

    
  }*/


  findOne(codigoEan: string): Promise<Produto> {
    return this.repositorioProduto.findOneBy({codigoEan});
  }


  findOneBy(idProduto: number): Promise<Produto>{
    return this.repositorioProduto.findOneBy({idProduto});
  }
  
  async update(idProduto: number, updateProdutoDto: UpdateProdutoDto) {


    const produto = new Produto();

    const coluns = await this.repositorioProduto.findOne({
      select: {
        descricaoProduto: true,
        //grupo: true,
       // ala: true, 
        quantidade: true,
        custo: true,
        porcentagem: true,
        statusProduto: true,
       
       }, where: {
          idProduto
      }
    })


console.log(coluns);

if(updateProdutoDto.descricaoProduto === undefined){
  produto.descricaoProduto = coluns.descricaoProduto;
  //console.log(produto.descricaoProduto);

}else{
  produto.descricaoProduto = updateProdutoDto.descricaoProduto;

}if(updateProdutoDto.quantidade === undefined){
  produto.quantidade = coluns.quantidade;
  //console.log('yes')

}else{
  produto.quantidade = updateProdutoDto.quantidade;

}if(updateProdutoDto.custo === undefined){
  produto.custo = coluns.custo;

}else{
  produto.custo = updateProdutoDto.custo;

}if(updateProdutoDto.porcentagem === undefined){
  produto.porcentagem = coluns.porcentagem

}else{
  produto.porcentagem = updateProdutoDto.porcentagem;

}if(updateProdutoDto.statusProduto === undefined){
  produto.statusProduto = coluns.statusProduto

}else{
  produto.statusProduto = updateProdutoDto.statusProduto;

}

    console.log(produto.descricaoProduto);
   // console.log(produto.ala);
    //console.log(produto.grupo);



    let porcen: number = produto.porcentagem;
  
    let novaPorcentagem: number = porcen/100;

    let precoCusto = produto.custo;
      
    let precoo = (parseFloat(precoCusto) * novaPorcentagem) + parseFloat(precoCusto);

    produto.preco = precoo;

    console.log(produto.preco)



    return this.repositorioProduto.update(idProduto, produto);
  }


mandarParaEtiqueta(idProduto: number, idEtiqueta: number){



  return 'this';
}




}


