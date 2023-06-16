import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
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


@Injectable()
export class EtiquetaService {
  private readonly logger = new Logger(EtiquetaService.name);
  constructor(
    @InjectRepository(Etiqueta)
    private repositorioEtiqueta: Repository<Etiqueta>,
    private readonly http: HttpService,

    @InjectRepository(Produto)
    private repositorioProduto: Repository<Produto>,

  ){}
  

  async create(createEtiquetaDto: CreateEtiquetaDto) {

    const etiq = new Etiqueta();

    try {
      const end = createEtiquetaDto.ipEtiqueta;

      const ipp = 'http://'+end;

      const ipp2 = 'http://'+end+'/protect';
      //console.log(ipp2)
    
    //console.log(ipp);

  const response = await this.http.get(ipp2).toPromise();

   if(response.status === 200){
    etiq.ipEtiqueta = createEtiquetaDto.ipEtiqueta;
    console.log('Comunicação concluida')
    
    const chave = await bcrypt.hashSync(createEtiquetaDto.ipEtiqueta, 1);
    console.log(chave)
    const response = await this.http.post(ipp2, chave.toString()).toPromise();
    etiq.hashEtiqueta = chave.toString();
    console.log(response.data);

   }
    } catch (error) {
      console.log(error)
      throw new Error('Verifique a comunicação com a Etiqueta');
    }
      
    etiq.nomeEtiqueta = createEtiquetaDto.nomeEtiqueta;
    etiq.corredor = createEtiquetaDto.corredor;
    etiq.pratilheira = createEtiquetaDto.pratilheira;

    if(createEtiquetaDto.statusEtiqueta === undefined){
      etiq.statusEtiqueta = 0;
    } else{
      etiq.statusEtiqueta = createEtiquetaDto.statusEtiqueta;
    }

    etiq.usuario = createEtiquetaDto.usuario;


    return this.repositorioEtiqueta.save(etiq);
  }

  findAll():Promise<Etiqueta[]>{
    return this.repositorioEtiqueta.find({
      select: {
        idEtiqueta: true,
        ipEtiqueta: true,
        nomeEtiqueta: true,
      }
    });
  }                     
  

  findOne(nomeEtiqueta: string) {
    return this.repositorioEtiqueta.findOne({
      select: {
        idEtiqueta: true,
        ipEtiqueta: true,
        nomeEtiqueta: true,
      },where:{
        nomeEtiqueta
      }
    });
  }

  async update(idEtiqueta: number, updateEtiquetaDto: UpdateEtiquetaDto) {

    const oneEtiqueta = await this.repositorioEtiqueta.findOne({
      select:{
        ipEtiqueta: true,
        nomeEtiqueta: true,
        statusEtiqueta: true,
      }, where:{
        idEtiqueta
      }
    })

    return `This action updates a #${idEtiqueta} etiqueta`;
  }




  async mandarPrecoEtiqueta(precoEtiqueta: PrecoEtiqueta){

console.log("et",precoEtiqueta.idEtiqueta, "prod", precoEtiqueta.idProduto);

        const etiq = await this.repositorioEtiqueta.findOneBy({
          idEtiqueta: precoEtiqueta.idEtiqueta
        });

       const prod = await this.repositorioProduto.findOneBy({
          idProduto: precoEtiqueta.idProduto
        })
        console.log(etiq.idEtiqueta)

        try {
          const ipp2 = 'http://'+etiq.ipEtiqueta+'/produto';
         
        const tes = prod.descricaoProduto.toUpperCase() +","+ "R$ "+prod.preco +","+ etiq.hashEtiqueta; 
        console.log(tes);

        const response = await this.http.post(ipp2, tes).toPromise()

       // const response = await Sttp.withHeaders({'}).post(ipp2, tes.toString())
    return response.data;
        
        console.log(response.data);
        } catch (error) {
          throw new(error);
        }

  }

 
}
