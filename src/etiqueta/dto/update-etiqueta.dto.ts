import { PartialType } from '@nestjs/mapped-types';
import { CreateEtiquetaDto } from './create-etiqueta.dto';
import { IsOptional } from "class-validator";

export class UpdateEtiquetaDto extends PartialType(CreateEtiquetaDto) {
    @IsOptional()
    ipEtiqueta: string;

    @IsOptional()
    nomeEtiqueta: string;

    @IsOptional()
    statusEtiqueta: number;

    @IsOptional()
    corredor: string;

    @IsOptional()
    pratilheira: string;

}
