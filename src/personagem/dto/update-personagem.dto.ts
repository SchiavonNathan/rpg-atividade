import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonagemDto } from './create-personagem.dto';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Classes } from '../entities/personagem.entity';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdatePersonagemDto extends PartialType(CreatePersonagemDto) {
    
    @ApiPropertyOptional()
    @IsString()
    name: string;

    @ApiPropertyOptional()
    @IsString()
    adventureName: string;

    @ApiPropertyOptional({ enum: Classes })
    @IsEnum(Classes)
    class: Classes;

    @ApiPropertyOptional()
    @IsNumber()
    strength: number;

    @ApiPropertyOptional()
    @IsNumber()
    defense: number;
}
