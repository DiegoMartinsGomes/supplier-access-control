import { Column, Entity, JoinColumn, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Supplier } from "./supplier.entity";

@Entity()
export class ValidityPeriod {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "start_date" })
    startDate: Date;

    @Column({ name: "end_date" })
    endDate: Date;

    @Column({ name: "active", default: true })
    active: boolean;

    @OneToMany(() => Supplier, x => x.validityPeriod)
    suppliers: Supplier[]
}
