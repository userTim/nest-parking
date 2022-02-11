import { EntityRepository, Repository } from 'typeorm';
import { FilterSpotsDto } from './dto/filter-spots.dto';
import { Spot } from './spots.entity';

@EntityRepository(Spot)
export class SpotsRepository extends Repository<Spot> {
  async getAvailableSpot(filterSpotsDto: FilterSpotsDto): Promise<Spot> {
    const { weight } = filterSpotsDto;

    const query = this.createQueryBuilder('spot');

    if (weight) {
      query.andWhere('spot.current_weight >= :weight', { weight });
    }

    query.addOrderBy('current_weight', 'ASC');

    const spot = await query.getOne();

    return spot;
  }

  async getSpotByPlate(plate_number: string): Promise<Spot> {
    const query = this.createQueryBuilder('spot');

    query.andWhere(
      `spot.parked_plates @> '[{ "plate_number": "${plate_number}"}]'`,
      {
        plate_number,
      },
    );

    const spot = await query.getOne();

    return spot;
  }
}
