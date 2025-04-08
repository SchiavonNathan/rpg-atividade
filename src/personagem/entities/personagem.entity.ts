import { ItemMagico } from "src/item-magico/entities/item-magico.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export enum Classes {
    GUERREIRO = 'Guerreiro',
    MAGO = 'Mago',
    ARQUEIRO = 'Arqueiro',
    LADINO = 'Ladino',
    BARDO = 'Bardo',
  }

@Entity('personagem')
export class Personagem {
@PrimaryGeneratedColumn('uuid')
id: string;

@Column()
name: string;

@Column()
adventureName: string;

@Column()
level: number;

@Column()
strength: number;

@Column()
defense: number;

@Column({
    type: 'enum',
    enum: Classes,
  })
class: Classes;

@OneToMany(() => ItemMagico, (itemmagico) => itemmagico.personagem)
  itemmagico: ItemMagico[];
}
