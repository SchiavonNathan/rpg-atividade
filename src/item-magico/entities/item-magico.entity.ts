import { Personagem } from "src/personagem/entities/personagem.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum ItemType {
    ARMA = 'Arma',
    ARMADURA = 'Armadura',
    AMULETO = 'Amuleto',
}

@Entity('item-magico')
export class ItemMagico {

@PrimaryGeneratedColumn('uuid')
id: string;

@Column()
name: string;

@Column()
strength: number;

@Column()
defense: number;

@Column({
    type: 'enum',
    enum: ItemType,
  })
itemType: ItemType

@ManyToOne(() => Personagem, (personagem) => personagem.itemmagico, {
  nullable: true,
  onDelete: 'SET NULL',
})
personagem: Personagem | null;
}
