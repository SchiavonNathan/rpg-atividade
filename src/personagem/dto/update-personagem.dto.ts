import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonagemDto } from './create-personagem.dto';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Classes } from '../entities/personagem.entity';

export class UpdatePersonagemDto extends PartialType(CreatePersonagemDto) {
    @IsString()
    name: string;

    @IsString()
    adventureName: string;

    @IsEnum(Classes)
    class: Classes;

    @IsNumber()
    strength: number;

    @IsNumber()
    defense: number;
}
