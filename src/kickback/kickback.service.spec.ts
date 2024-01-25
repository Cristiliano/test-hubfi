import { Test, TestingModule } from '@nestjs/testing';
import { KickbackService } from './kickback.service';

describe('KickbackService', () => {
  let service: KickbackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KickbackService],
    }).compile();

    service = module.get<KickbackService>(KickbackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
