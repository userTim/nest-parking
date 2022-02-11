import { SpotType } from '../spot-types/spot-types.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ParkedVehicle } from './parked-vehicle.model';

@Entity()
export class Spot {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @ManyToOne(() => SpotType)
  spot_type: string;

  @Column()
  current_weight: number;

  @Column('jsonb', { default: [] })
  parked_plates: ParkedVehicle[];
}
