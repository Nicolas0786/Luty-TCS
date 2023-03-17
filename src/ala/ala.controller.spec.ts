import { Test, TestingModule } from '@nestjs/testing';
import { AlaController } from './ala.controller';
import { AlaService } from './ala.service';

describe('AlaController', () => {
  let controller: AlaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlaController],
      providers: [AlaService],
    }).compile();

    controller = module.get<AlaController>(AlaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
