import { Usuario } from "src/usuario/entities/usuario.entity";

export class CreateEtiquetaDto {

    ipEtiqueta: string;

    nomeEtiqueta: string;

    statusEtiqueta: number;

    usuario: Usuario;
}
