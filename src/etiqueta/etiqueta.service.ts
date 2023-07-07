import { HttpService } from '@nestjs/axios';
import { ForbiddenException, HttpException, HttpStatus, Injectable, Ip, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AxiosError, AxiosResponse } from 'axios';
import { catchError, lastValueFrom, map, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateEtiquetaDto } from './dto/create-etiqueta.dto';
import { UpdateEtiquetaDto } from './dto/update-etiqueta.dto';
import { Etiqueta } from './entities/etiqueta.entity';
import * as bcrypt from 'bcrypt';
import { Produto } from 'src/produto/entities/produto.entity';
import { PrecoEtiqueta } from './dto/preco-etiqueta.dto';

import {Sttp} from '@supercharge/sttp';
import { error } from 'console';
import { response } from 'express';
import { ProdutoEtiqueta } from './entities/produtoEtiqueta';
import { Usuario } from 'src/usuario/entities/usuario.entity';


@Injectable()
export class EtiquetaService {
  
  private readonly logger = new Logger(EtiquetaService.name);
  constructor(
    @InjectRepository(Etiqueta)
    private repositorioEtiqueta: Repository<Etiqueta>,
    private readonly http: HttpService,

    @InjectRepository(Produto)
    private repositorioProduto: Repository<Produto>,

    @InjectRepository(ProdutoEtiqueta)
    private repositorioProdutoEtiqueta: Repository<ProdutoEtiqueta>,

    @InjectRepository(Usuario)
    private repositorioUsuario: Repository<Usuario>,

  ){}
  

  async cadastrar(createEtiquetaDto: CreateEtiquetaDto) {

    const etiq = new Etiqueta();

    try {
      
      
      const ipExistis = await this.repositorioEtiqueta.findOneBy({ipEtiqueta: createEtiquetaDto.ipEtiqueta});
      if(ipExistis){
        throw new HttpException("Esse iP já está sendo usado por outra Etiqueta", HttpStatus.FORBIDDEN);
      }else{
        
        const ip:string = createEtiquetaDto.ipEtiqueta;
        const ipp2:string = 'http://'+ip+'/protect';
        const response = await this.http.get(ipp2).toPromise();
        new HttpException("Comunicando com o Ip", HttpStatus.FORBIDDEN);

   if(response.status === 200){
    etiq.ipEtiqueta = createEtiquetaDto.ipEtiqueta;
    new HttpException("Comunicação concluida", HttpStatus.OK);

    const chave = await bcrypt.hashSync(createEtiquetaDto.ipEtiqueta, 1);
    //console.log(chave)
    const response = await this.http.post(ipp2, chave.toString()).toPromise();
    etiq.hashEtiqueta = chave.toString();
    //console.log(response.data);
    etiq.nomeEtiqueta = createEtiquetaDto.nomeEtiqueta;
    etiq.corredor = createEtiquetaDto.corredor;
    etiq.pratilheira = createEtiquetaDto.pratilheira;

    if(createEtiquetaDto.statusEtiqueta === undefined){
      etiq.statusEtiqueta = 1;
    } else{
      etiq.statusEtiqueta = createEtiquetaDto.statusEtiqueta;
    }

    etiq.usuario = createEtiquetaDto.usuario;
  }

   }
    } catch (error) {
      console.log(error)
      throw new HttpException('Verifique a comunicação com a Etiqueta', HttpStatus.FORBIDDEN);
    }

    this.repositorioEtiqueta.save(etiq);

    return new HttpException('Etiqueta Cadastrada com Sucesso', HttpStatus.OK);
  }


  findAll():Promise<Etiqueta[] | undefined>{
    return this.repositorioEtiqueta.find({
      select: {
        idEtiqueta: true,
        ipEtiqueta: true,
        nomeEtiqueta: true,
        corredor: true,
        pratilheira: true
      },where:{
        statusEtiqueta: 1,
      }
    });
  }  
  
  
  buscarTodas():Promise<Etiqueta[] | undefined>{
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
  
  async integracao(){
    const tes = await this.repositorioProdutoEtiqueta.find({
      select:{
        idProdutoEtiqueta: true,
        dataIntegracao: true,
        preco: true,
        descricaoProduto: true,
      }, relations:{
        produto: true,
        etiqueta: true,
        usuario: true,
      }
    });

    return tes;
  }

  findOne(idEtiqueta: number) {
    return this.repositorioEtiqueta.findOne({
      select: {
        idEtiqueta: true,
        ipEtiqueta: true,
        nomeEtiqueta: true,
        corredor: true,
        pratilheira: true,
      },where:{
        idEtiqueta
      }
    });
  }

  async update(idEtiqueta: number, updateEtiquetaDto: UpdateEtiquetaDto) {

    const etiqueta = new Etiqueta();
    const oneEtiqueta: Etiqueta = await this.repositorioEtiqueta.findOne({
      select:{
        ipEtiqueta: true,
        nomeEtiqueta: true,
        statusEtiqueta: true,
        corredor: true,
        pratilheira: true

      }, where:{
        idEtiqueta
      }
    });

    try {
      
    if(updateEtiquetaDto.ipEtiqueta === undefined){
      etiqueta.ipEtiqueta = oneEtiqueta.ipEtiqueta
    }else{

      try {
        
        const ipp2:string = 'http://'+updateEtiquetaDto.ipEtiqueta;+'/protect';

        const response = await this.http.get(ipp2).toPromise();

        
      if(response.status === 200){
        etiqueta.ipEtiqueta = updateEtiquetaDto.ipEtiqueta;
      }

      } catch (error) {
        //console.log(error, "erro ao atualizar")
        throw new HttpException('Verifique a comunicação com a Etiqueta', HttpStatus.FORBIDDEN);
      }
      
    }

    if(updateEtiquetaDto.nomeEtiqueta === undefined){
      etiqueta.nomeEtiqueta = oneEtiqueta.nomeEtiqueta;
    }else{
      etiqueta.nomeEtiqueta = updateEtiquetaDto.nomeEtiqueta;
    }

    if(updateEtiquetaDto.statusEtiqueta === undefined){
      etiqueta.statusEtiqueta = oneEtiqueta.statusEtiqueta;
    }else{
      etiqueta.statusEtiqueta = updateEtiquetaDto.statusEtiqueta;
    }

    if(updateEtiquetaDto.corredor === undefined){
      etiqueta.corredor = oneEtiqueta.corredor;
    }else{
      etiqueta.corredor = updateEtiquetaDto.corredor;
    }

    if(updateEtiquetaDto.pratilheira === undefined){
      etiqueta.pratilheira = oneEtiqueta.pratilheira;
    }else{
      etiqueta.pratilheira = updateEtiquetaDto.pratilheira;
    }

  } catch (error) {
      throw new HttpException("Não foi possivel atualizar as informações da Etiqueta, verifique a comunicação", HttpStatus.FORBIDDEN);
  }

  this.repositorioEtiqueta.update(idEtiqueta, etiqueta);

    return new HttpException("Etiqueta Atualizada com Sucesso", HttpStatus.OK);
  }


  
  async mandarPrecoEtiqueta(precoEtiqueta: PrecoEtiqueta){

      //console.log("et",precoEtiqueta.idEtiqueta, "prod", precoEtiqueta.idProduto);

      const prodEtiq = new ProdutoEtiqueta();

        const etiq: Etiqueta = await this.repositorioEtiqueta.findOneBy({
          idEtiqueta: precoEtiqueta.idEtiqueta
        });

       const prod: Produto = await this.repositorioProduto.findOneBy({
          idProduto: precoEtiqueta.idProduto
        })

        const usu: Usuario = await this.repositorioUsuario.findOneBy({
          idUsuario: precoEtiqueta.idUsuario
        })
        //console.log(etiq.idEtiqueta)

        try {
          const ipp2:string = 'http://'+etiq.ipEtiqueta+'/produto';
         
        const produto: string = prod.descricaoProduto.toUpperCase() +","+ "R$ "+prod.preco +","+ "Ean: "+prod.codigoEan +","+ etiq.hashEtiqueta; 
        //console.log(produto);

        const response = await this.http.post(ipp2, produto).toPromise()

       // const response = await Sttp.withHeaders({'}).post(ipp2, tes.toString())
        

        prodEtiq.etiqueta = etiq;
        prodEtiq.preco = prod.preco;
        prodEtiq.descricaoProduto = prod.descricaoProduto;
        prodEtiq.usuario = usu;

        this.repositorioProdutoEtiqueta.save(prodEtiq);
        
        return response.data;
        
        //console.log(response.data);
        } catch (error) {
          console.log(error);
          throw new HttpException("Não foi possivel enviar o produto para a etiqueta", HttpStatus.FORBIDDEN);
        }

  }

 
}
