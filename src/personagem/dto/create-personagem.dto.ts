import { isEnum, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Classes } from '../entities/personagem.entity';
import { ApiProperty } from "@nestjs/swagger";


export class CreatePersonagemDto {
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    adventureName: string;

    @ApiProperty({ enum: Classes })
    @IsEnum(Classes)
    @IsNotEmpty()
    class: Classes;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    strength: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    defense: number;
}
