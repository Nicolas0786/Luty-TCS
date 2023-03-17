import { Test, TestingModule } from '@nestjs/testing';
import { AlaService } from './ala.service';

describe('AlaService', () => {
  let service: AlaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlaService],
    }).compile();

    service = module.get<AlaService>(AlaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
