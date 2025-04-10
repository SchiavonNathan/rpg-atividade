import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ItemType } from "../entities/item-magico.entity";
import { ApiProperty } from "@nestjs/swagger";


export class CreateItemMagicoDto {
   
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ enum: ItemType })
    @IsEnum(ItemType)
    @IsNotEmpty()
    itemType: ItemType;

    @ApiProperty()
    @IsNumber()
    strength: number;

    @ApiProperty()
    @IsNumber()
    defense: number;
}    

