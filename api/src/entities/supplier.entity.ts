import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BlockUnit } from "./block-unit.entity";
import { ValidityPeriod } from "./validity-period.entity";

@Entity()
export class Supplier {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "name" })
    name: string;

    @Column({ name: "document" })
    document: string;

    @Column({ name: "occupation" })
    occupation: string;

    @Column({ name: "registered_by" })
    registeredBy: string;

    @Column({ name: "registered_date", default: () => "CURRENT_TIMESTAMP" })
    registeredDate: Date;

    @Column({ name: "responsible_contact" })
    responsibleContact: string;

    @ManyToOne(() => BlockUnit, x => x.suppliers, { eager: true })
    @JoinColumn({ name: "block_unit_id" })
    blockUnit: BlockUnit;

    @ManyToOne(() => ValidityPeriod, x => x.suppliers, { eager: true })
    @JoinColumn({ name: "validity_period_id" })
    validityPeriod: ValidityPeriod
}
