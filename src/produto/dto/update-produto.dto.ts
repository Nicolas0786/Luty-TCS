import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { CreateProdutoDto } from './create-produto.dto';

export class UpdateProdutoDto extends PartialType(CreateProdutoDto) {

    @IsOptional()
    descricaoProduto: string;

    @IsOptional()
    grupo: string;

    @IsOptional()
    ala: string;

    @IsOptional()
    quantidade: number;

    @IsOptional()
    custo: string;
    
    @IsOptional()
    porcentagem: number
}
