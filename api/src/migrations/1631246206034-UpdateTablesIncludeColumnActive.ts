import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateTablesIncludeColumnActive1631246206034 implements MigrationInterface {
    name = 'UpdateTablesIncludeColumnActive1631246206034'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`quintadosventos\`.\`validity_period\` ADD \`active\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`quintadosventos\`.\`supplier\` ADD \`active\` tinyint NOT NULL DEFAULT 1`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`quintadosventos\`.\`supplier\` DROP COLUMN \`active\``);
        await queryRunner.query(`ALTER TABLE \`quintadosventos\`.\`validity_period\` DROP COLUMN \`active\``);
    }

}
