import { VehicleTypes } from '../vehicle-types/vehicle-types.enum';

export interface ParkedVehicle {
  plate_number: string;
  type: VehicleTypes;
}
