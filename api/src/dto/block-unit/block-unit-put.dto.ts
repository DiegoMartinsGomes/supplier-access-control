import { ApiProperty } from "@nestjs/swagger";

export class BlockUnitPutDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    block: number;

    @ApiProperty()
    unit: number;

    @ApiProperty()
    status: number;

    @ApiProperty()
    active: boolean;
}