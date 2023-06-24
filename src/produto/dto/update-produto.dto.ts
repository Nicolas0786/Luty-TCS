import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsNumber } from 'class-validator';
import { CreateProdutoDto } from './create-produto.dto';
import { Grupo } from 'src/grupo/entities/grupo.entity';
import { Ala } from 'src/ala/entities/ala.entity';

export class UpdateProdutoDto extends PartialType(CreateProdutoDto) {

    @IsOptional()
    @IsNumber()
    codigoEan: number;

    @IsOptional()
    descricaoProduto: string;
    
    @IsOptional()
    @IsNumber()
    quantidade: number;
    
    @IsOptional()
    @IsNumber()
    custo: number;
    
    @IsOptional()
    @IsNumber()
    porcentagem: number

    @IsOptional()
    statusProduto: number;

    @IsOptional()
    grupos: Grupo;

    @IsOptional()
    alas: Ala;


}
