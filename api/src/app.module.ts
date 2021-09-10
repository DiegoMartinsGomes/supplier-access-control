import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { BlockUnit } from './entities/block-unit.entity'
import { BlockUnitController } from './controllers/block-unit/block-unit.controller';
import { ValidityPeriodController } from './controllers/validity-period/validity-period.controller';
import { ValidityPeriod } from './entities/validity-period.entity';
import { Supplier } from './entities/supplier.entity';
import { SupplierController } from './controllers/supplier/supplier.controller';
import { SupplierService } from './services/supplier/supplier.service';
import { ValidityPeriodService } from './services/validity-period/validity-period.service';
import { BlockUnitService } from './services/block-unit/block-unit.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      // @ts-ignore
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [BlockUnit, ValidityPeriod, Supplier],
    }),
    TypeOrmModule.forFeature([BlockUnit, ValidityPeriod, Supplier])
  ],
  controllers: [AppController, BlockUnitController, ValidityPeriodController, SupplierController],
  providers: [AppService, SupplierService, ValidityPeriodService, BlockUnitService],
})
export class AppModule { }
