import { Column, Entity, JoinColumn, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Supplier } from "./supplier.entity";

@Entity()
export class BlockUnit {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "block" })
    block: number;

    @Column({ name: "unit" })
    unit: number;

    @Column({ name: "status" })
    status: number;

    @Column({ name: "active", default: true })
    active: boolean;

    @OneToMany(() => Supplier, x => x.blockUnit)
    suppliers: Supplier[];
}
