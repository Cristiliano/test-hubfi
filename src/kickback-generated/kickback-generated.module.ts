import { Module } from '@nestjs/common';
import { KickbackGeneratedService } from './kickback-generated.service';
import { KickbackGeneratedController } from './kickback-generated.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KickbackGenerated } from './entities/kickback-generated.entity';

@Module({
  imports: [TypeOrmModule.forFeature([KickbackGenerated])],
  controllers: [KickbackGeneratedController],
  providers: [KickbackGeneratedService],
})
export class KickbackGeneratedModule {}
