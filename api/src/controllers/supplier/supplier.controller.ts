import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { SupplierPostDto } from 'src/dto/supplier/supplier-post.dto';
import { SupplierPutDto } from 'src/dto/supplier/supplier-put.dto';
import { Supplier } from 'src/entities/supplier.entity';
import { SupplierResponse } from 'src/responses/supplier.response';
import { SupplierService } from 'src/services/supplier/supplier.service';

@Controller('supplier')
export class SupplierController {
    constructor(
        private readonly supplierService: SupplierService,
    ) { }

    @ApiOkResponse({ type: [SupplierResponse] })
    @Get()
    async index(): Promise<Supplier[]> {
        return this.supplierService.getAll();
    }

    @ApiOkResponse({ type: SupplierResponse })
    @Get(':id')
    async show(@Param('id') id: string): Promise<Supplier> {
        return this.supplierService.getById(id);
    }

    @ApiCreatedResponse({ type: SupplierResponse })
    @Post()
    async store(@Body() body: SupplierPostDto): Promise<Supplier> {
        return this.supplierService.insert(body);
    }

    @ApiOkResponse({ type: SupplierResponse })
    @Put(':id')
    async update(@Param('id') id: string, @Body() body: SupplierPutDto): Promise<Supplier> {
        return this.supplierService.update(id, body);
    }

    @ApiOkResponse()
    @Put('disable/:id')
    async disable(@Param('id') id: string): Promise<void> {
        this.supplierService.disable(id);
    }
}
