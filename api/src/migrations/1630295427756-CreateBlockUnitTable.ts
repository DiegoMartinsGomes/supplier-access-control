import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBlockUnitTable1630295427756 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'block_unit',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'block',
                    type: 'int'
                },
                {
                    name: 'unit',
                    type: 'int'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
}
