import { Repository } from 'typeorm';
import { CreateAlaDto } from './dto/create-ala.dto';
import { UpdateAlaDto } from './dto/update-ala.dto';
import { Ala } from './entities/ala.entity';
export declare class AlaService {
    private repositorioAla;
    constructor(repositorioAla: Repository<Ala>);
    create(createAlaDto: CreateAlaDto): Promise<Ala>;
    findAll(): Promise<Ala[]>;
    update(idAla: number, updateAlaDto: UpdateAlaDto): Promise<import("typeorm").UpdateResult>;
}
