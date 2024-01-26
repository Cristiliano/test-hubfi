import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KickbackService } from './kickback.service';
import { CreateKickbackDto } from './dto/create-kickback.dto';
import { UpdateKickbackDto } from './dto/update-kickback.dto';

@Controller('kickback')
export class KickbackController {
  constructor(private readonly kickbackService: KickbackService) {}

  @Post()
  create(@Body() createKickbackDto: CreateKickbackDto) {
    return this.kickbackService.create(createKickbackDto);
  }

  @Get()
  findAll() {
    return this.kickbackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kickbackService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKickbackDto: UpdateKickbackDto) {
    return this.kickbackService.update(+id, updateKickbackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kickbackService.remove(+id);
  }
}
