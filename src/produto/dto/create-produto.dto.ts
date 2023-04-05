import internal from "stream";
import { IsNotEmpty} from "class-validator";
import { Grupo } from "src/grupo/entities/grupo.entity";
import { Ala } from "src/ala/entities/ala.entity";
import { Etiqueta } from "src/etiqueta/entities/etiqueta.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";

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

    statusProduto: number;

    @IsNotEmpty()
    grupos: Grupo;

    @IsNotEmpty()
    alas: Ala;

    @IsNotEmpty()
    usuario: Usuario;

}


