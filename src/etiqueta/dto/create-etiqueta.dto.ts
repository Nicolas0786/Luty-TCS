import { Usuario } from "src/usuario/entities/usuario.entity";
import { IsNotEmpty, IsNumber} from "class-validator";


export class CreateEtiquetaDto {

    
    @IsNotEmpty()
    ipEtiqueta: string;

    @IsNotEmpty()
    nomeEtiqueta: string;

    statusEtiqueta: number;

    @IsNotEmpty()
    corredor: string;

    @IsNotEmpty()
    pratilheira: string;

    @IsNotEmpty()
    usuario: Usuario;
}
