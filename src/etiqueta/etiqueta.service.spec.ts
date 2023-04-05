import { Test, TestingModule } from '@nestjs/testing';
import { EtiquetaService } from './etiqueta.service';

describe('EtiquetaService', () => {
  let service: EtiquetaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EtiquetaService],
    }).compile();

    service = module.get<EtiquetaService>(EtiquetaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
