import { Injectable } from '@nestjs/common';
import { CreateItemMagicoDto } from './dto/create-item-magico.dto';
import { UpdateItemMagicoDto } from './dto/update-item-magico.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemMagico, ItemType } from './entities/item-magico.entity';
import { Repository } from 'typeorm';
import { Personagem } from 'src/personagem/entities/personagem.entity';


@Injectable()
export class ItemMagicoService {

  constructor(
      @InjectRepository(ItemMagico)
      private itemMagicoRepository: Repository<ItemMagico>
    ) {}

  async create(createItemMagicoDto: CreateItemMagicoDto) {

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
    return this.itemMagicoRepository.find();
  }

  async findOne(id: string) {
    return this.itemMagicoRepository.findOne({where: {id}});
  }

  async update(id: number, updateItemMagicoDto: UpdateItemMagicoDto) {
    return this.itemMagicoRepository.update(id, updateItemMagicoDto);
  }

  async remove(id: string) {
    return this.itemMagicoRepository.delete(id);
  }

  async adicionarItemAoPersonagem(itemId: string, personagemId: string) {
    const item = await this.itemMagicoRepository.findOne({ where: { id: itemId }, relations: ['personagem'] });
    if (!item) throw new Error('Item não encontrado');

    if (item.itemType === ItemType.AMULETO) {
      const amuletoExistente = await this.itemMagicoRepository.findOne({
        where: {
          personagem: { id: personagemId },
          itemType: ItemType.AMULETO,
        },
        relations: ['personagem'],
      });
  
      if (amuletoExistente) {
        throw new Error('O personagem já possui um amuleto.');
      }
    }
    
    item.personagem = { id: personagemId } as Personagem;
    return this.itemMagicoRepository.save(item);
  }
  
  async listarItensPorPersonagem(personagemId: string) {
    return this.itemMagicoRepository.find({
      where: {
        personagem: { id: personagemId },
      },
      relations: ['personagem'],
    });
  }
  
  async removerItemDoPersonagem(itemId: string) {
    const item = await this.itemMagicoRepository.findOne({ where: { id: itemId }, relations: ['personagem'] });
    if (!item) throw new Error('Item não encontrado');
    
    item.personagem = null;
    return this.itemMagicoRepository.save(item);
  }
  
  async buscarAmuletoDoPersonagem(personagemId: string) {
    return this.itemMagicoRepository.findOne({
      where: {
        personagem: { id: personagemId },
        itemType: ItemType.AMULETO,
      },
      relations: ['personagem'],
    });
  }
}
