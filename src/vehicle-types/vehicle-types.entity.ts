import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { VehicleTypes } from './vehicle-types.enum';

@Entity()
export class VehicleType {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @Unique(['system_name'])
  system_name: VehicleTypes;

  @Column()
  weight: number;
}
