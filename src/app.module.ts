import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonagemModule } from './personagem/personagem.module';
import { ItemMagicoModule } from './item-magico/item-magico.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personagem } from './personagem/entities/personagem.entity';
import { ItemMagico } from './item-magico/entities/item-magico.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'root',
    password: 'password',
    database: 'postgres',
    entities: [Personagem, ItemMagico],
    synchronize: true,
  }),
  PersonagemModule, ItemMagicoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
