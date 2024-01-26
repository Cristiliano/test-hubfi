import { PartialType } from '@nestjs/mapped-types';
import { CreateKickbackGeneratedDto } from './create-kickback-generated.dto';

export class UpdateKickbackGeneratedDto extends PartialType(CreateKickbackGeneratedDto) {}
