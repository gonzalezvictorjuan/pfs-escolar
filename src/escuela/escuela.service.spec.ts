import { Test, TestingModule } from '@nestjs/testing';
import { EscuelaService } from './escuela.service';

describe('EscuelaService', () => {
  let service: EscuelaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EscuelaService],
    }).compile();

    service = module.get<EscuelaService>(EscuelaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
