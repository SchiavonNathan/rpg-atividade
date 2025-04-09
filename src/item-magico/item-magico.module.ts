import { Module } from '@nestjs/common';
import { ItemMagicoService } from './item-magico.service';
import { ItemMagicoController } from './item-magico.controller';
import { ItemMagico } from './entities/item-magico.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
   imports:[TypeOrmModule.forFeature([ItemMagico])],
  controllers: [ItemMagicoController],
  providers: [ItemMagicoService],
})
export class ItemMagicoModule {}
