import { Module } from '@nestjs/common';
import { PersonagemService } from './personagem.service';
import { PersonagemController } from './personagem.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personagem } from './entities/personagem.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Personagem])],
  controllers: [PersonagemController],
  providers: [PersonagemService],
  exports: [PersonagemService],
})
export class PersonagemModule {}
