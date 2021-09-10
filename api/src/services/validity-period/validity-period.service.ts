import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ValidityPeriodPostDto } from 'src/dto/validity-period/validity-period-post.dto';
import { ValidityPeriodPutDto } from 'src/dto/validity-period/validity-period-put.dto';
import { ValidityPeriod } from 'src/entities/validity-period.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ValidityPeriodService {
    constructor(
        @InjectRepository(ValidityPeriod)
        private readonly validityPeriodRepository: Repository<ValidityPeriod>
    ) { }

    async getAll(): Promise<ValidityPeriod[]> {
        return await this.validityPeriodRepository.find();
    }

    async getById(id: string): Promise<ValidityPeriod> {
        return await this.validityPeriodRepository.findOneOrFail(id);
    }

    async insert(validityPeriod: ValidityPeriodPostDto): Promise<ValidityPeriod> {
        const result = this.validityPeriodRepository.create(validityPeriod);
        return this.validityPeriodRepository.save(result);
    }

    async update(id: string, validityPeriod: ValidityPeriodPutDto): Promise<ValidityPeriod> {
        await this.validityPeriodRepository.findOneOrFail(id);
        this.validityPeriodRepository.update({ id: id }, validityPeriod);
        return this.validityPeriodRepository.findOneOrFail(id);
    }

    async disable(id: string): Promise<void> {
        const validityPeriod = await this.validityPeriodRepository.findOneOrFail(id);
        validityPeriod.active = false;
        this.validityPeriodRepository.update({ id: id }, validityPeriod);
    }
}
