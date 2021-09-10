import { ApiProperty } from "@nestjs/swagger";

export class ValidityPeriodPostDto {
    @ApiProperty()
    startDate: Date;

    @ApiProperty()
    endDate: Date;
}