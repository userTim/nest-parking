import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleTypesRepository } from '../vehicle-types/vehicle-types.repository';
import { SpotsController } from './spots.controller';
import { SpotsRepository } from './spots.repository';
import { SpotsService } from './spots.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SpotsRepository, VehicleTypesRepository]),
  ],
  controllers: [SpotsController],
  providers: [SpotsService],
})
export class SpotsModule {}
