import { Body, Controller, Post } from '@nestjs/common';
import { ParkVehicleDto } from './dto/park-vehicle.dto';
import { RetrieveVehicleDto } from './dto/retrieve-vehicle.dto';
import { Spot } from './spots.entity';
import { SpotsService } from './spots.service';

@Controller('spots')
export class SpotsController {
  constructor(private spotsService: SpotsService) {}

  @Post('/park')
  parkVehicle(@Body() parkVehicleDto: ParkVehicleDto): Promise<Spot> {
    return this.spotsService.parkVehicle(parkVehicleDto);
  }

  @Post('/retrieve')
  retrieveVehicle(
    @Body() retrieveVehicleDto: RetrieveVehicleDto,
  ): Promise<Spot> {
    return this.spotsService.retrieveVehicle(retrieveVehicleDto);
  }
}
