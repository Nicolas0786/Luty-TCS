import { Repository } from 'typeorm';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
import { Grupo } from './entities/grupo.entity';
export declare class GrupoService {
    private repositorioGrupo;
    constructor(repositorioGrupo: Repository<Grupo>);
    create(createGrupoDto: CreateGrupoDto): Promise<Grupo>;
    findAll(): Promise<Grupo[]>;
    findOne(id: number): string;
    update(idGrupo: number, updateGrupoDto: UpdateGrupoDto): Promise<import("typeorm").UpdateResult>;
}
