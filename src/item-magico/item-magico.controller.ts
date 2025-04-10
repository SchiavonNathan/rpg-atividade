  import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
  import { ItemMagicoService } from './item-magico.service';
  import { CreateItemMagicoDto } from './dto/create-item-magico.dto';
  import { UpdateItemMagicoDto } from './dto/update-item-magico.dto';

  @Controller('item-magico')
  export class ItemMagicoController {
    constructor(private readonly itemMagicoService: ItemMagicoService) {}

    @Post()
    create(@Body() createItemMagicoDto: CreateItemMagicoDto) {
      return this.itemMagicoService.create(createItemMagicoDto);
    }

    @Get()
    findAll() {
      return this.itemMagicoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.itemMagicoService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateItemMagicoDto: UpdateItemMagicoDto) {
      return this.itemMagicoService.update(+id, updateItemMagicoDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.itemMagicoService.remove(id);
    }

    @Post(':itemId/personagem/:personagemId')
    adicionarItemAoPersonagem(
      @Param('itemId') itemId: string,
      @Param('personagemId') personagemId: string,
    ) {
      return this.itemMagicoService.adicionarItemAoPersonagem(itemId, personagemId);
    }

    @Get('/personagem/:personagemId')
    listarItensPorPersonagem(@Param('personagemId') personagemId: string) {
      return this.itemMagicoService.listarItensPorPersonagem(personagemId);
    }

    @Patch(':itemId/remover-personagem')
    removerItemDoPersonagem(@Param('itemId') itemId: string) {
      return this.itemMagicoService.removerItemDoPersonagem(itemId);
    }

    @Get('/personagem/:personagemId/amuleto')
    buscarAmuletoDoPersonagem(@Param('personagemId') personagemId: string) {
      return this.itemMagicoService.buscarAmuletoDoPersonagem(personagemId);
    }
  }
