import { ApiProperty } from "@nestjs/swagger"

export class ValidityPeriodResponse {
    @ApiProperty()
    id: string;

    @ApiProperty()
    startDate: Date;

    @ApiProperty()
    endDate: Date;
}