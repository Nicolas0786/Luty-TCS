import internal from "stream";
import { IsNotEmpty} from "class-validator";
import { Grupo } from "src/grupo/entities/grupo.entity";
import { Ala } from "src/ala/entities/ala.entity";
import { Etiqueta } from "src/etiqueta/entities/etiqueta.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";

export class CreateProdutoDto {


    codigoEan: string;


    descricaoProduto: string;
    
    
    quantidade: number;
    
    
    custo: string;
    
    
    porcentagem: number

    statusProduto: number;

    
    grupos: Grupo;

    
    alas: Ala;

    usuario: Usuario;

}


