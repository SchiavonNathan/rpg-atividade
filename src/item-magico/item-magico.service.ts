import { Injectable } from '@nestjs/common';
import { CreateItemMagicoDto } from './dto/create-item-magico.dto';
import { UpdateItemMagicoDto } from './dto/update-item-magico.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemMagico } from './entities/item-magico.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemMagicoService {

  constructor(
      @InjectRepository(ItemMagico)
      private itemMagicoRepository: Repository<ItemMagico>
    ) {}

  create(createItemMagicoDto: CreateItemMagicoDto) {

    if(createItemMagicoDto.strength > 10){
      throw new Error('Nivel de forca maior que 10!');
    }

    if(createItemMagicoDto.defense > 10){
      throw new Error('Nivel de defesa maior que 10!');
    }

    if(createItemMagicoDto.defense + createItemMagicoDto.strength == 0){
      throw new Error('O item näo pode possuir 0 em todos atributos!');
    }

    if(createItemMagicoDto.itemType == "Arma"){
      const item = this.itemMagicoRepository.create({
        name: createItemMagicoDto.name,
        itemType: createItemMagicoDto.itemType,
        strength: createItemMagicoDto.strength,
        defense: 0,
      })

      return this.itemMagicoRepository.save(item);
    }

    if(createItemMagicoDto.itemType == "Armadura"){
      const item = this.itemMagicoRepository.create({
        name: createItemMagicoDto.name,
        itemType: createItemMagicoDto.itemType,
        strength: 0,
        defense: createItemMagicoDto.defense,
      })

      return this.itemMagicoRepository.save(item);
    }

    if(createItemMagicoDto.itemType == "Amuleto"){
      const item = this.itemMagicoRepository.create({
        name: createItemMagicoDto.name,
        itemType: createItemMagicoDto.itemType,
        strength: createItemMagicoDto.strength,
        defense: createItemMagicoDto.defense,
      })

      return this.itemMagicoRepository.save(item);
    }
  }

  findAll() {
    return `This action returns all itemMagico`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itemMagico`;
  }

  update(id: number, updateItemMagicoDto: UpdateItemMagicoDto) {
    return `This action updates a #${id} itemMagico`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemMagico`;
  }
}
