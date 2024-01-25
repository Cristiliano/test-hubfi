import { PartialType } from '@nestjs/mapped-types';
import { CreateKickbackDto } from './create-kickback.dto';

export class UpdateKickbackDto extends PartialType(CreateKickbackDto) {}
