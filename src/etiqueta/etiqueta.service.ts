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


@Injectable()
export class EtiquetaService {
  private readonly logger = new Logger(EtiquetaService.name);
  constructor(
    @InjectRepository(Etiqueta)
    private repositorioEtiqueta: Repository<Etiqueta>,
    private http: HttpService,
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
    
    const tes = await bcrypt.hashSync(createEtiquetaDto.ipEtiqueta, 1);
    console.log(tes)
    const response = await this.http.post(ipp2, tes.toString()).toPromise();
    etiq.hashEtiqueta = tes.toString();
    console.log(response.data);

   }
    } catch (error) {
      console.log(error)
      throw new Error('Verifique a comunicação com a Etiqueta');
    }
      
    etiq.nomeEtiqueta = createEtiquetaDto.nomeEtiqueta;

    if(createEtiquetaDto.statusEtiqueta === undefined){
      etiq.statusEtiqueta = 0;
    } else{
      etiq.statusEtiqueta = createEtiquetaDto.statusEtiqueta;
    }

    etiq.usuario = createEtiquetaDto.usuario;

    //return this.repositorioEtiqueta.save(etiq);

    return this.repositorioEtiqueta.save(etiq);
  }

  findAll(){
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

  update(id: number, updateEtiquetaDto: UpdateEtiquetaDto) {
    return `This action updates a #${id} etiqueta`;
  }

 
}
