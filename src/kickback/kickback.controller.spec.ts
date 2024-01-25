import { Test, TestingModule } from '@nestjs/testing';
import { KickbackController } from './kickback.controller';
import { KickbackService } from './kickback.service';

describe('KickbackController', () => {
  let controller: KickbackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KickbackController],
      providers: [KickbackService],
    }).compile();

    controller = module.get<KickbackController>(KickbackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
