import { PartialType } from '@nestjs/mapped-types';
import { CreateItemMagicoDto } from './create-item-magico.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { ItemType } from '../entities/item-magico.entity';

export class UpdateItemMagicoDto extends PartialType(CreateItemMagicoDto) {
    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    name?: string;
  
    @ApiPropertyOptional({ enum: ItemType })
    @IsEnum(ItemType)
    @IsOptional()
    itemType?: ItemType;
  
    @ApiPropertyOptional()
    @IsNumber()
    @IsOptional()
    strength?: number;
  
    @ApiPropertyOptional()
    @IsNumber()
    @IsOptional()
    defense?: number;
}
