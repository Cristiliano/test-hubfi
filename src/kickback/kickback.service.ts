import { Injectable } from '@nestjs/common';
import { CreateKickbackDto } from './dto/create-kickback.dto';
import { UpdateKickbackDto } from './dto/update-kickback.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Kickback } from './entities/kickback.entity';
import { Repository } from 'typeorm';

@Injectable()
export class KickbackService {

  constructor(
    @InjectRepository(Kickback) 
    private readonly kickbackRepositoy: Repository<Kickback>
  ){}

  async create(createKickbackDto: CreateKickbackDto) {
    const user = this.kickbackRepositoy.create(createKickbackDto);
    
    return await this.kickbackRepositoy.save(user);
  }

  async findAll() {
    return this.kickbackRepositoy.find();
  }

  async findOne(id: number) {
    return this.kickbackRepositoy.findOne({ where: { id: +id } });
  }

  async update(id: number, updateKickbackDto: UpdateKickbackDto) {
    const user = await this.kickbackRepositoy.findOne({ where: { id: +id } });

    Object.assign(user, updateKickbackDto);
    
    return await this.kickbackRepositoy.save(user);
  }

  async remove(id: number) {
    const user = await this.kickbackRepositoy.findOne({ where: { id: +id } });
    
    return await this.kickbackRepositoy.remove(user);
  }
}
