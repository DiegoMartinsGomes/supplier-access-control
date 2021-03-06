import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlockUnitFormatedGetDto } from 'src/dto/block-unit/block-unit-formated-get.dto';
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

    async getAllFormated(): Promise<BlockUnitFormatedGetDto[]> {
        return (await this.blockUnitRepository.find()).map((blockUnit) => this.formated(blockUnit));
    }

    private formated(blockUnit: BlockUnit): BlockUnitFormatedGetDto {
        let dto = new BlockUnitFormatedGetDto();
        dto.id = blockUnit.id;
        dto.blockUnit = `${blockUnit.block} ${("00" + blockUnit.unit.toString()).slice(-2)}`;
        dto.active = blockUnit.active;

        return dto;
    }

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
