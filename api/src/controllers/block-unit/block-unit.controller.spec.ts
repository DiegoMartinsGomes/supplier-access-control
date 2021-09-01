import { Test, TestingModule } from '@nestjs/testing';
import { BlockUnitController } from './block-unit.controller';

describe('BlockUnitController', () => {
  let controller: BlockUnitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlockUnitController],
    }).compile();

    controller = module.get<BlockUnitController>(BlockUnitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
