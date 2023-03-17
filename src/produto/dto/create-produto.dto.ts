import internal from "stream";
import { IsNotEmpty} from "class-validator";
import { Grupo } from "src/grupo/entities/grupo.entity";
import { Ala } from "src/ala/entities/ala.entity";

export class CreateProdutoDto {

    @IsNotEmpty()
    codigoEan: string;

    @IsNotEmpty()
    descricaoProduto: string;
    
    @IsNotEmpty()
    quantidade: number;
    
    @IsNotEmpty()
    custo: string;
    
    @IsNotEmpty()
    porcentagem: number

    grupos: Grupo;

    alas: Ala;

}


