import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Spot } from './spots.entity';
import { VehicleTypesRepository } from '../vehicle-types/vehicle-types.repository';
import { ParkVehicleDto } from './dto/park-vehicle.dto';
import { ParkedVehicle } from './parked-vehicle.model';
import { SpotsRepository } from './spots.repository';
import { RetrieveVehicleDto } from './dto/retrieve-vehicle.dto';

@Injectable()
export class SpotsService {
  constructor(
    @InjectRepository(SpotsRepository)
    private spotsRepository: SpotsRepository,
    @InjectRepository(VehicleTypesRepository)
    private vehicleTypesRepository: VehicleTypesRepository,
  ) {}

  async parkVehicle(parkVehicleDto: ParkVehicleDto): Promise<Spot> {
    const { plate_number, vehicle_type } = parkVehicleDto;
    const weight = await this.vehicleTypesRepository.getWeightByType(
      vehicle_type,
    );

    const spot = await this.spotsRepository.getAvailableSpot({ weight });

    if (!spot) {
      throw new NotFoundException(
        'No available spots for this type of vehicle',
      );
    }

    spot.current_weight -= weight;

    const parkedVehicle: ParkedVehicle = {
      plate_number: plate_number,
      type: vehicle_type,
    };

    spot.parked_plates.push(parkedVehicle);

    await this.spotsRepository.save(spot);

    return spot;
  }

  async retrieveVehicle(retrieveVehicleDto: RetrieveVehicleDto): Promise<Spot> {
    const { plate_number } = retrieveVehicleDto;

    const spot = await this.spotsRepository.getSpotByPlate(plate_number);

    if (!spot) {
      throw new NotFoundException('No vehicle with given plate number');
    }

    const selectedVehicle = spot.parked_plates.find(
      (parked) => parked.plate_number === plate_number,
    );

    const selectedVehicleWeight =
      await this.vehicleTypesRepository.getWeightByType(selectedVehicle.type);

    spot.current_weight += selectedVehicleWeight;

    spot.parked_plates = spot.parked_plates.filter(
      (parked) => parked.plate_number !== plate_number,
    );

    await this.spotsRepository.save(spot);

    return spot;
  }
}
