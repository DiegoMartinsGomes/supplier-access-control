import { Test, TestingModule } from '@nestjs/testing';
import { BlockUnitService } from './block-unit.service';

describe('BlockUnitService', () => {
  let service: BlockUnitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlockUnitService],
    }).compile();

    service = module.get<BlockUnitService>(BlockUnitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
