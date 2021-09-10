import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { BlockUnitPostDto } from 'src/dto/block-unit/block-unit-post.dto';
import { BlockUnitPutDto } from 'src/dto/block-unit/block-unit-put.dto';
import { BlockUnit } from 'src/entities/block-unit.entity';
import { BlockUnitService } from 'src/services/block-unit/block-unit.service';
import { BlockUnitResponse } from '../../responses/block-unit.response';

@Controller('blockunits')
export class BlockUnitController {
    constructor(
        private readonly blockUnitService: BlockUnitService,
    ) { }

    @ApiOkResponse({ type: [BlockUnitResponse] })
    @Get()
    async index(): Promise<BlockUnit[]> {
        return this.blockUnitService.getAll();
    }

    @ApiOkResponse({ type: BlockUnitResponse })
    @Get(':id')
    async show(@Param('id') id: string): Promise<BlockUnit> {
        return this.blockUnitService.getById(id);
    }

    @ApiCreatedResponse({ type: BlockUnitResponse })
    @Post()
    async store(@Body() body: BlockUnitPostDto): Promise<BlockUnit> {
        return this.blockUnitService.insert(body);
    }

    @ApiOkResponse({ type: BlockUnitResponse })
    @Put(':id')
    async update(@Param('id') id: string, @Body() body: BlockUnitPutDto): Promise<BlockUnit> {
        return this.blockUnitService.update(id, body);
    }

    @ApiOkResponse()
    @Put('disable/:id')
    async disable(@Param('id') id: string): Promise<void> {
        this.blockUnitService.disable(id);
    }
}
