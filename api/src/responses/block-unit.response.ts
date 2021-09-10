import { ApiProperty } from "@nestjs/swagger"

export class BlockUnitResponse {
    @ApiProperty()
    id: number;

    @ApiProperty()
    block: number;

    @ApiProperty()
    unit: number;

    @ApiProperty()
    status: number;

    @ApiProperty()
    active: boolean;
}