import { GrupoService } from './grupo.service';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
export declare class GrupoController {
    private readonly grupoService;
    constructor(grupoService: GrupoService);
    create(createGrupoDto: CreateGrupoDto): Promise<import("./entities/grupo.entity").Grupo>;
    findAll(): Promise<import("./entities/grupo.entity").Grupo[]>;
    findOne(id: string): string;
    update(idGrupo: number, updateGrupoDto: UpdateGrupoDto): Promise<import("typeorm").UpdateResult>;
}
