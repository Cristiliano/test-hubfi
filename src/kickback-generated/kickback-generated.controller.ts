import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KickbackGeneratedService } from './kickback-generated.service';
import { CreateKickbackGeneratedDto } from './dto/create-kickback-generated.dto';
import { UpdateKickbackGeneratedDto } from './dto/update-kickback-generated.dto';

@Controller('kickback-generated')
export class KickbackGeneratedController {
  constructor(private readonly kickbackGeneratedService: KickbackGeneratedService) {}

  @Post()
  create(@Body() createKickbackGeneratedDto: CreateKickbackGeneratedDto) {
    return this.kickbackGeneratedService.create(createKickbackGeneratedDto);
  }

  @Get()
  findAll() {
    return this.kickbackGeneratedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kickbackGeneratedService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKickbackGeneratedDto: UpdateKickbackGeneratedDto) {
    return this.kickbackGeneratedService.update(+id, updateKickbackGeneratedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kickbackGeneratedService.remove(+id);
  }
}
