import { AlaService } from './ala.service';
import { CreateAlaDto } from './dto/create-ala.dto';
import { UpdateAlaDto } from './dto/update-ala.dto';
export declare class AlaController {
    private readonly alaService;
    constructor(alaService: AlaService);
    create(createAlaDto: CreateAlaDto): Promise<import("./entities/ala.entity").Ala>;
    findAll(): Promise<import("./entities/ala.entity").Ala[]>;
    update(idAla: number, updateAlaDto: UpdateAlaDto): Promise<import("typeorm").UpdateResult>;
}
