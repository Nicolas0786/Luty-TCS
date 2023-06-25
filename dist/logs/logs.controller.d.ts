import { LogsService } from './logs.service';
import { CreateLogDto } from './dto/create-log.dto';
import { UpdateLogDto } from './dto/update-log.dto';
export declare class LogsController {
    private readonly logsService;
    constructor(logsService: LogsService);
    create(createLogDto: CreateLogDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLogDto: UpdateLogDto): string;
    remove(id: string): string;
}
