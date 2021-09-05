import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableInitial1630739190235 implements MigrationInterface {
    name = 'CreateTableInitial1630739190235'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`quintadosventos\`.\`validity_period\` (\`id\` char(36) NOT NULL, \`start_date\` datetime NOT NULL, \`end_date\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`quintadosventos\`.\`supplier\` (\`id\` char(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`document\` varchar(255) NOT NULL, \`occupation\` varchar(255) NOT NULL, \`registered_by\` varchar(255) NOT NULL, \`registered_date\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`responsible_contact\` varchar(255) NOT NULL, \`block_unit_id\` char(36) NULL, \`validity_period_id\` char(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`quintadosventos\`.\`block_unit\` (\`id\` char(36) NOT NULL, \`block\` int NOT NULL, \`unit\` int NOT NULL, \`status\` int NOT NULL, \`active\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`quintadosventos\`.\`supplier\` ADD CONSTRAINT \`FK_917cd152a60f17fbc137b258736\` FOREIGN KEY (\`block_unit_id\`) REFERENCES \`quintadosventos\`.\`block_unit\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`quintadosventos\`.\`supplier\` ADD CONSTRAINT \`FK_faf8e46211b0ccdf2c5adc2b57c\` FOREIGN KEY (\`validity_period_id\`) REFERENCES \`quintadosventos\`.\`validity_period\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`quintadosventos\`.\`supplier\` DROP FOREIGN KEY \`FK_faf8e46211b0ccdf2c5adc2b57c\``);
        await queryRunner.query(`ALTER TABLE \`quintadosventos\`.\`supplier\` DROP FOREIGN KEY \`FK_917cd152a60f17fbc137b258736\``);
        await queryRunner.query(`DROP TABLE \`quintadosventos\`.\`block_unit\``);
        await queryRunner.query(`DROP TABLE \`quintadosventos\`.\`supplier\``);
        await queryRunner.query(`DROP TABLE \`quintadosventos\`.\`validity_period\``);
    }

}
