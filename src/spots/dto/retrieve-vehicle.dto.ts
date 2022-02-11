import { IsNotEmpty } from 'class-validator';

export class RetrieveVehicleDto {
  @IsNotEmpty()
  plate_number: string;
}
