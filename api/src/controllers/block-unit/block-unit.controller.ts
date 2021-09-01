import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlockUnit } from 'src/entities/block-unit.entity';
import { Repository } from 'typeorm';

@Controller('blockunits')
export class BlockUnitController {

    constructor(
        @InjectRepository(BlockUnit)
        private blockUnitRepository: Repository<BlockUnit>
    ) { }

    @Get()
    async index(): Promise<BlockUnit[]> {
        console.log(this.blockUnitRepository);
        return this.blockUnitRepository.find();
    }

    @Get(':id')
    async show(@Param('id') id: string): Promise<BlockUnit> {
        return this.blockUnitRepository.findOneOrFail(+id);
    }

    @Post()
    async store(@Body() body: BlockUnit): Promise<BlockUnit> {
        const blockUnit = this.blockUnitRepository.create(body);
        return this.blockUnitRepository.save(blockUnit);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: BlockUnit): Promise<BlockUnit> {
        await this.blockUnitRepository.findOneOrFail(id);
        this.blockUnitRepository.update({ id: +id }, body)
        return this.blockUnitRepository.findOneOrFail(id);
    }

    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id') id: string): Promise<void> {
        await this.blockUnitRepository.findOneOrFail(+id);
        this.blockUnitRepository.delete(+id)
    }
}
