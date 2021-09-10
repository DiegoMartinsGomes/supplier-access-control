import { ApiProperty } from "@nestjs/swagger"
import { BlockUnitResponse } from "./block-unit.response";
import { ValidityPeriodResponse } from "./validity-period.response";

export class SupplierResponse {
    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    document: string;

    @ApiProperty()
    occupation: string;

    @ApiProperty()
    registeredBy: string;

    @ApiProperty()
    registeredDate: Date;

    @ApiProperty()
    responsibleContact: string;

    @ApiProperty()
    blockUnit: BlockUnitResponse;

    @ApiProperty()
    validityPeriod: ValidityPeriodResponse;
}