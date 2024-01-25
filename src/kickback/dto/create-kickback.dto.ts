import { KickbackTypes } from "../entities/kickback.entity";

export class CreateKickbackDto {
    value: number;
    type: KickbackTypes;
}
