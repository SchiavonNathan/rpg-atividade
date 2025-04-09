import { isEnum, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Classes } from '../entities/personagem.entity';


export class CreatePersonagemDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    adventureName: string;

    @IsEnum(Classes)
    @IsNotEmpty()
    class: Classes;

    @IsNumber()
    @IsNotEmpty()
    strength: number;

    @IsNumber()
    @IsNotEmpty()
    defense: number;
}
