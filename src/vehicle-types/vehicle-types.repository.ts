import { EntityRepository, Repository } from 'typeorm';
import { VehicleType } from '../vehicle-types/vehicle-types.entity';
import { VehicleTypes } from '../vehicle-types/vehicle-types.enum';

@EntityRepository(VehicleType)
export class VehicleTypesRepository extends Repository<VehicleType> {
  private vehicleTypes: VehicleType[];

  async getVehicleTypes(): Promise<VehicleType[]> {
    if (this.vehicleTypes) {
      return this.vehicleTypes;
    }

    const query = this.createQueryBuilder('spot_type');

    this.vehicleTypes = await query.getMany();

    return this.vehicleTypes;
  }

  async getWeightByType(type: VehicleTypes): Promise<number> {
    if (!this.vehicleTypes) {
      await this.getVehicleTypes();
    }

    const vehicleType = this.vehicleTypes.find(
      (vehicleType) => vehicleType.system_name === type,
    );

    return vehicleType.weight;
  }
}
