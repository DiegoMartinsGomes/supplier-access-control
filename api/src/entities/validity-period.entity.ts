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

    @OneToMany(() => Supplier, x => x.validityPeriod)
    suppliers: Supplier[]
}
