import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum KickbackTypes{
    FIXED = 'fixed',
    PERCENT = 'percent',
    DYNAMIC = 'dynamic'
}

@Entity({ name: 'kickback' })
export class Kickback {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'decimal',
        precision: 4,
        scale: 2
    })
    value: number;
    
    @Column({
        type: "enum",
        enum: KickbackTypes,
        default: KickbackTypes.FIXED,
    })
    type: KickbackTypes
}