import { ApiProperty } from "@nestjs/swagger";

export class BlockUnitFormatedGetDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    blockUnit: string;

    @ApiProperty()
    active: boolean;
}