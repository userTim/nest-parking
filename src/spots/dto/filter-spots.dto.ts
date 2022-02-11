import { IsNotEmpty } from 'class-validator';

export class FilterSpotsDto {
  @IsNotEmpty()
  weight: number;
}
