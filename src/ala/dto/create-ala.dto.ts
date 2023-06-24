import { IsNotEmpty} from "class-validator";
export class CreateAlaDto {

    @IsNotEmpty()
    descricao:string;
}
