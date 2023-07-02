import { IsNotEmpty, IsNumber, IsNegative} from "class-validator";
import { Grupo } from "src/grupo/entities/grupo.entity";
import { Ala } from "src/ala/entities/ala.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";

export class CreateProdutoDto {

    
   
    @IsNotEmpty()
    codigoEan: number;

    //@IsNotEmpty()
    descricaoProduto: string;
    
    
   
    @IsNotEmpty()
    quantidade: number;
    
   
    
    @IsNotEmpty()
    custo: number;
    
   
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


