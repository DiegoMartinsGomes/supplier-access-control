import { Column, Entity, PrimaryGeneratedColumn, Table } from "typeorm";

@Entity()
export class BlockUnit {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    block: number;

    @Column()
    unit: number;
}
