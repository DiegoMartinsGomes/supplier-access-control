import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { BlockUnitPostDto } from 'src/dto/block-unit-post.dto';
import { BlockUnitPutDto } from 'src/dto/block-unit-put.dto';
import { BlockUnit } from 'src/entities/block-unit.entity';
import { Repository } from 'typeorm';
import { BlockUnitResponse } from '../../../responses/block-unit.response';

@Controller('blockunits')
export class BlockUnitController {

    constructor(
        @InjectRepository(BlockUnit)
        private blockUnitRepository: Repository<BlockUnit>
    ) { }

    @ApiOkResponse({ type: [BlockUnitResponse] })
    @Get()
    async index(): Promise<BlockUnit[]> {
        return this.blockUnitRepository.find();
    }

    @ApiOkResponse({ type: BlockUnitResponse })
    @Get(':id')
    async show(@Param('id') id: string): Promise<BlockUnit> {
        return this.blockUnitRepository.findOneOrFail(id);
    }

    @ApiCreatedResponse({ type: BlockUnitResponse })
    @Post()
    async store(@Body() body: BlockUnitPostDto): Promise<BlockUnit> {
        const blockUnit = this.blockUnitRepository.create(body);
        return this.blockUnitRepository.save(blockUnit);
    }

    @ApiOkResponse({ type: BlockUnitResponse })
    @Put(':id')
    async update(@Param('id') id: string, @Body() body: BlockUnitPutDto): Promise<BlockUnit> {
        await this.blockUnitRepository.findOneOrFail(id);
        this.blockUnitRepository.update({ id: id }, body)
        return this.blockUnitRepository.findOneOrFail(id);
    }

    @ApiOkResponse()
    @Put('disable/:id')
    async disable(@Param('id') id: string): Promise<void> {
        const blockUnit = await this.blockUnitRepository.findOneOrFail(id);
        blockUnit.active = false;
        this.blockUnitRepository.update({ id: id }, blockUnit);
    }
}
