import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePersonagemDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    adventureName: string;

    @IsString()
    @IsNotEmpty()
    class: string;

    @IsNumber()
    @IsNotEmpty()
    strength: number;

    @IsNumber()
    @IsNotEmpty()
    defense: number;
}
