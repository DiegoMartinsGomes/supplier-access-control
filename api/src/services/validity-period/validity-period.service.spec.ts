import { Test, TestingModule } from '@nestjs/testing';
import { ValidityPeriodService } from './validity-period.service';

describe('ValidityPeriodService', () => {
  let service: ValidityPeriodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ValidityPeriodService],
    }).compile();

    service = module.get<ValidityPeriodService>(ValidityPeriodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
