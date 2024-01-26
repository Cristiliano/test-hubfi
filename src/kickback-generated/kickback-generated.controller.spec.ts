import { Test, TestingModule } from '@nestjs/testing';
import { KickbackGeneratedController } from './kickback-generated.controller';
import { KickbackGeneratedService } from './kickback-generated.service';

describe('KickbackGeneratedController', () => {
  let controller: KickbackGeneratedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KickbackGeneratedController],
      providers: [KickbackGeneratedService],
    }).compile();

    controller = module.get<KickbackGeneratedController>(KickbackGeneratedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
