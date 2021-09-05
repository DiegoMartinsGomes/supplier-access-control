import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { BlockUnit } from './entities/block-unit.entity'
import { BlockUnitController } from './controllers/block-unit/block-unit.controller';
import { ValidityPeriod } from './entities/validity-period.entity';
import { Supplier } from './entities/supplier.entity';

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
      entities: [BlockUnit, Supplier, ValidityPeriod],
    }),
    TypeOrmModule.forFeature([BlockUnit])
  ],
  controllers: [AppController, BlockUnitController],
  providers: [AppService],
})
export class AppModule { }
