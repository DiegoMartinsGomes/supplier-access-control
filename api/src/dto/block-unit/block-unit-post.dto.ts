import { ApiProperty } from "@nestjs/swagger";

export class BlockUnitPostDto {
    @ApiProperty()
    block: number;

    @ApiProperty()
    unit: number;

    @ApiProperty()
    status: number;
}