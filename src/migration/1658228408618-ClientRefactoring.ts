import { MigrationInterface, QueryRunner } from "typeorm"

export class ClientRefactoring1658228408618 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'ALTER TABLE `client` CHANGE COLUMN `firstName` `name` VARCHAR(255)',
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'ALTER TABLE `client` CHANGE COLUMN `name` `firstName` VARCHAR(255)',
        )
    }

}
