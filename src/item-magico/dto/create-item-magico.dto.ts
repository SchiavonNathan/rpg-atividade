import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ItemType } from "../entities/item-magico.entity";


export class CreateItemMagicoDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEnum(ItemType)
    @IsNotEmpty()
    itemType: ItemType;

    @IsNumber()
    strength: number;

    @IsNumber()
    defense: number;
}    

