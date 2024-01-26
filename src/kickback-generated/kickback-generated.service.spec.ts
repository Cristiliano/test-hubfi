import { Test, TestingModule } from '@nestjs/testing';
import { KickbackGeneratedService } from './kickback-generated.service';

describe('KickbackGeneratedService', () => {
  let service: KickbackGeneratedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KickbackGeneratedService],
    }).compile();

    service = module.get<KickbackGeneratedService>(KickbackGeneratedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
