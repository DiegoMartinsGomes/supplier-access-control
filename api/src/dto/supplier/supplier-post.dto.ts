import { ApiProperty } from "@nestjs/swagger";

export class SupplierPostDto {
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
    active: boolean;

    @ApiProperty()
    idBlockUnit: string;

    @ApiProperty()
    idValidityPeriod: string;
}