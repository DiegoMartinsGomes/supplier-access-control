import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlockUnitPostDto } from 'src/dto/block-unit/block-unit-post.dto';
import { BlockUnitPutDto } from 'src/dto/block-unit/block-unit-put.dto';
import { BlockUnit } from 'src/entities/block-unit.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlockUnitService {
    constructor(
        @InjectRepository(BlockUnit)
        private readonly blockUnitRepository: Repository<BlockUnit>
    ) { }

    async getAll(): Promise<BlockUnit[]> {
        return this.blockUnitRepository.find();
    }

    async getById(id: string): Promise<BlockUnit> {
        return this.blockUnitRepository.findOneOrFail(id);
    }

    async insert(blockUnitDto: BlockUnitPostDto): Promise<BlockUnit> {
        const blockUnit = this.blockUnitRepository.create(blockUnitDto);
        return this.blockUnitRepository.save(blockUnit);
    }

    async update(id: string, blockUnitDto: BlockUnitPutDto): Promise<BlockUnit> {
        await this.blockUnitRepository.findOneOrFail(id);
        this.blockUnitRepository.update({ id: id }, blockUnitDto)
        return this.blockUnitRepository.findOneOrFail(id);
    }

    async disable(id: string): Promise<void> {
        const blockUnit = await this.blockUnitRepository.findOneOrFail(id);
        blockUnit.active = false;
        this.blockUnitRepository.update({ id: id }, blockUnit);
    }
}
