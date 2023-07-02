import { IsNotEmpty} from "class-validator";
import { Usuario } from "src/usuario/entities/usuario.entity";
export class CreateAlaDto {

    @IsNotEmpty()
    descricao:string;

    @IsNotEmpty()
    usuario: Usuario;
}
