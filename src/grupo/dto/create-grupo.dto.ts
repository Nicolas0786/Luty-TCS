import { IsNotEmpty} from "class-validator";
import { Usuario } from "src/usuario/entities/usuario.entity";


export class CreateGrupoDto {

    @IsNotEmpty()
    descricaoGrupo: string;

    @IsNotEmpty()
    usuario: Usuario;
}
