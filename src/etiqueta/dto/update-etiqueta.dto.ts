import { PartialType } from '@nestjs/mapped-types';
import { CreateEtiquetaDto } from './create-etiqueta.dto';

export class UpdateEtiquetaDto extends PartialType(CreateEtiquetaDto) {}
