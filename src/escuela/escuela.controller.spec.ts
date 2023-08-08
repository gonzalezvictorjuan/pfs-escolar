import { Test, TestingModule } from '@nestjs/testing';
import { EscuelaController } from './escuela.controller';
import { EscuelaService } from './escuela.service';

describe('EscuelaController', () => {
  let controller: EscuelaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EscuelaController],
      providers: [EscuelaService],
    }).compile();

    controller = module.get<EscuelaController>(EscuelaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
