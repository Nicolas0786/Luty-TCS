import { IsNotEmpty, IsNumber} from "class-validator";

export class PrecoEtiqueta {

    @IsNumber()
    @IsNotEmpty()
    idEtiqueta: number;

    @IsNumber()
    @IsNotEmpty()
    idProduto: number;

}