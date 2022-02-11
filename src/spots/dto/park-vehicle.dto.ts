import { IsEnum, IsNotEmpty } from 'class-validator';
import { VehicleTypes } from '../../vehicle-types/vehicle-types.enum';

export class ParkVehicleDto {
  @IsNotEmpty()
  plate_number: string;

  @IsNotEmpty()
  @IsEnum(VehicleTypes)
  vehicle_type: VehicleTypes;
}
