import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { ValidityPeriodPostDto } from 'src/dto/validity-period/validity-period-post.dto';
import { ValidityPeriodPutDto } from 'src/dto/validity-period/validity-period-put.dto';
import { ValidityPeriod } from 'src/entities/validity-period.entity';
import { ValidityPeriodService } from 'src/services/validity-period/validity-period.service';
import { ValidityPeriodResponse } from '../../responses/validity-period.response';

@Controller('validityperiods')
export class ValidityPeriodController {

    constructor(
        private validityPeriodService: ValidityPeriodService,
    ) { }

    @ApiOkResponse({ type: [ValidityPeriodResponse] })
    @Get()
    async index(): Promise<ValidityPeriod[]> {
        return this.validityPeriodService.getAll();
    }

    @ApiOkResponse({ type: ValidityPeriodResponse })
    @Get(':id')
    async show(@Param('id') id: string): Promise<ValidityPeriod> {
        return this.validityPeriodService.getById(id);
    }

    @ApiCreatedResponse({ type: ValidityPeriodResponse })
    @Post()
    async store(@Body() body: ValidityPeriodPostDto): Promise<ValidityPeriod> {
        return this.validityPeriodService.insert(body);
    }

    @ApiOkResponse({ type: ValidityPeriodResponse })
    @Put(':id')
    async update(@Param('id') id: string, @Body() body: ValidityPeriodPutDto): Promise<ValidityPeriod> {
        return this.validityPeriodService.update(id, body);
    }

    @ApiOkResponse()
    @Put('disable/:id')
    async disable(@Param('id') id: string): Promise<void> {
        this.validityPeriodService.disable(id);
    }
}

