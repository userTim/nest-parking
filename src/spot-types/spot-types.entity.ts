import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { SpotTypes } from './spot-types.enum';

@Entity()
export class SpotType {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @Unique(['system_name'])
  system_name: SpotTypes;

  @Column()
  weight: number;
}
