import { PartialType } from '@nestjs/mapped-types';
import { CreateAlaDto } from './create-ala.dto';

export class UpdateAlaDto extends PartialType(CreateAlaDto) {}
