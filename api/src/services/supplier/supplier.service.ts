import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SupplierPostDto } from 'src/dto/supplier/supplier-post.dto';
import { SupplierPutDto } from 'src/dto/supplier/supplier-put.dto';
import { BlockUnit } from 'src/entities/block-unit.entity';
import { Supplier } from 'src/entities/supplier.entity';
import { ValidityPeriod } from 'src/entities/validity-period.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SupplierService {
    constructor(
        @InjectRepository(Supplier)
        private readonly supplierRepository: Repository<Supplier>,
        @InjectRepository(BlockUnit)
        private readonly blockUnitRepository: Repository<BlockUnit>,
        @InjectRepository(ValidityPeriod)
        private readonly validityPeriodRepository: Repository<ValidityPeriod>
    ) { }

    async getAll(): Promise<Supplier[]> {
        return this.supplierRepository.find();
    }

    async getById(id: string): Promise<Supplier> {
        return this.supplierRepository.findOneOrFail(id);
    }

    async insert(supplierDto: SupplierPostDto): Promise<Supplier> {
        const supplier = this.supplierRepository.create(supplierDto);
        supplier.blockUnit = await this.blockUnitRepository.findOneOrFail(supplierDto.idBlockUnit);
        supplier.validityPeriod = await this.validityPeriodRepository.findOneOrFail(supplierDto.idValidityPeriod);
        return this.supplierRepository.save(supplier);
    }

    async update(id: string, supplierDto: SupplierPutDto): Promise<Supplier> {
        const supplier = await this.supplierRepository.findOneOrFail(id);
        supplier.blockUnit = await this.blockUnitRepository.findOneOrFail(supplierDto.idBlockUnit);
        supplier.validityPeriod = await this.validityPeriodRepository.findOneOrFail(supplierDto.idValidityPeriod);
        this.supplierRepository.update({ id: id }, supplier);
        return this.supplierRepository.findOneOrFail(id);
    }

    async disable(id: string): Promise<void> {
        const supplier = await this.supplierRepository.findOneOrFail(id);
        supplier.active = false;
        this.supplierRepository.update({ id: id }, supplier);
    }
}
