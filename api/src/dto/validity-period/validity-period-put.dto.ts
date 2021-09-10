import { ApiProperty } from "@nestjs/swagger";

export class ValidityPeriodPutDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    startDate: Date;

    @ApiProperty()
    endDate: Date;

    @ApiProperty()
    active: boolean;
}