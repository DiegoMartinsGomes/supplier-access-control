import { Test, TestingModule } from '@nestjs/testing';
import { ValidityPeriodController } from './validity-period.controller';

describe('BlockUnitController', () => {
  let controller: ValidityPeriodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ValidityPeriodController],
    }).compile();

    controller = module.get<ValidityPeriodController>(ValidityPeriodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
