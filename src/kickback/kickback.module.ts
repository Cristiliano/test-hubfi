import { Module } from '@nestjs/common';
import { KickbackService } from './kickback.service';
import { KickbackController } from './kickback.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kickback } from './entities/kickback.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Kickback])],
  controllers: [KickbackController],
  providers: [KickbackService],
})
export class KickbackModule {}
