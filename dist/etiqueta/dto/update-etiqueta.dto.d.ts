import { CreateEtiquetaDto } from './create-etiqueta.dto';
declare const UpdateEtiquetaDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateEtiquetaDto>>;
export declare class UpdateEtiquetaDto extends UpdateEtiquetaDto_base {
    ipEtiqueta: string;
    nomeEtiqueta: string;
    statusEtiqueta: number;
    corredor: string;
    pratilheira: string;
}
export {};
