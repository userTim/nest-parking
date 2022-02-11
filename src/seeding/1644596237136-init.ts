import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1644596237136 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO spot_type(system_name, weight) VALUES ('SMALL', 1);
      INSERT INTO spot_type(system_name, weight) VALUES ('MEDIUM', 2);
      INSERT INTO spot_type(system_name, weight) VALUES ('LARGE', 4);
      
      INSERT INTO vehicle_type(system_name, weight) VALUES ('MOTORCYCLE', 1);
      INSERT INTO vehicle_type(system_name, weight) VALUES ('CAR', 2);
      INSERT INTO vehicle_type(system_name, weight) VALUES ('BUS', 4);
      
      INSERT INTO spot(current_weight, spot_type) VALUES (4,3);
      INSERT INTO spot(current_weight, spot_type) VALUES (4,3);
      INSERT INTO spot(current_weight, spot_type) VALUES (4,3);
      INSERT INTO spot(current_weight, spot_type) VALUES (2,2);
      INSERT INTO spot(current_weight, spot_type) VALUES (2,2);
      INSERT INTO spot(current_weight, spot_type) VALUES (2,2);
      INSERT INTO spot(current_weight, spot_type) VALUES (1,1);
      INSERT INTO spot(current_weight, spot_type) VALUES (1,1);
      INSERT INTO spot(current_weight, spot_type) VALUES (1,1);
    `);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async down(queryRunner: QueryRunner): Promise<void> {}
}
