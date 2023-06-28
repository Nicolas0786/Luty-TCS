import { IsNotEmpty} from "class-validator";

export class PrecoEtiqueta {

    @IsNotEmpty()
    idEtiqueta: number;

    @IsNotEmpty()
    idProduto: number;

}