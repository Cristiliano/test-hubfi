import { Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Purchase } from './entities/purchase.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PurchaseService {

  constructor(@InjectRepository(Purchase) private readonly purchaseRepository: Repository<Purchase>){}

  async create(createPurchaseDto: CreatePurchaseDto) {
    const user = this.purchaseRepository.create(createPurchaseDto);
    
    return await this.purchaseRepository.save(user);
  }

  async findAll() {
    return this.purchaseRepository.find();
  }

  async findOne(id: number) {
    return this.purchaseRepository.findOne({ where: { id: +id } });
  }

  async update(id: number, updatePurchaseDto: UpdatePurchaseDto) {
    const purchase = await this.purchaseRepository.findOne({ where: { id: +id } });
    
    Object.assign(purchase, updatePurchaseDto);

    return await this.purchaseRepository.save(purchase);
  }

  async remove(id: number) {
    const purchase = await this.purchaseRepository.findOne({ where: {id: +id} });
    
    return await this.purchaseRepository.remove(purchase);
  }
}
