import { Injectable } from '@nestjs/common';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Classes, Personagem } from './entities/personagem.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonagemService {

  constructor(
    @InjectRepository(Personagem)
    private personagemRepository: Repository<Personagem>
  ) {}

  
  create(createPersonagemDto: CreatePersonagemDto) {

    if(createPersonagemDto.strength + createPersonagemDto.defense > 10){
      throw new Error('Niveis de defesa e força maiores que o permitidos, os dois somados não podem ultrapassar 10');
    }

    const personagem = this.personagemRepository.create({
      name: createPersonagemDto.name,
      adventureName: createPersonagemDto.adventureName,
      class: createPersonagemDto.class,
      strength: createPersonagemDto.strength,
      defense: createPersonagemDto.defense,
      level: 1,  
    })
    
    return this.personagemRepository.save(personagem);
  }

  findAll() {
    return this.personagemRepository.find();
  }

  findOne(id: string) {
    return this.personagemRepository.findOne({where: {id}});
  }

  update(id: string, updatePersonagemDto: UpdatePersonagemDto) {
    return this.personagemRepository.update(id, updatePersonagemDto);
  }

  remove(id: string) {
    return this.personagemRepository.delete(id);
  }
}
