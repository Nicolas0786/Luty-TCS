import { IsNotEmpty} from "class-validator";


export class CreateGrupoDto {

    @IsNotEmpty()
    descricaoGrupo: string;
}
