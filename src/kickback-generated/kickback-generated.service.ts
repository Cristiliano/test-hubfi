import { Injectable } from '@nestjs/common';
import { CreateKickbackGeneratedDto } from './dto/create-kickback-generated.dto';
import { UpdateKickbackGeneratedDto } from './dto/update-kickback-generated.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { KickbackGenerated } from './entities/kickback-generated.entity';
import { Repository } from 'typeorm';

@Injectable()
export class KickbackGeneratedService {

  constructor(
    @InjectRepository(KickbackGenerated)
    private readonly kickbackGeneratedRepository: Repository<KickbackGenerated>
  ){}

  async create(createKickbackGeneratedDto: CreateKickbackGeneratedDto) {
    const user = this.kickbackGeneratedRepository.create(createKickbackGeneratedDto);
    
    return await this.kickbackGeneratedRepository.save(user);
  }

  async findAll() {
    return this.kickbackGeneratedRepository.find();
  }

  async findOne(id: number) {
    return this.kickbackGeneratedRepository.findOne({ where: { id: +id } });
  }

  async update(id: number, updateKickbackGeneratedDto: UpdateKickbackGeneratedDto) {
    const user = await this.kickbackGeneratedRepository.findOne({ where: { id: +id } });

    Object.assign(user, updateKickbackGeneratedDto);
    
    return await this.kickbackGeneratedRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.kickbackGeneratedRepository.findOne({ where: { id: +id } });
    
    return await this.kickbackGeneratedRepository.remove(user);
  }
}
