import { Kickback } from "src/kickback/entities/kickback.entity";
import { 
    Column, 
    Entity, 
    JoinColumn, 
    OneToOne, 
    PrimaryGeneratedColumn 
} from "typeorm";

@Entity({ name: 'kickback-generated' })
export class KickbackGenerated {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2
    })
    value: number;
    
    @Column({ type: "timestamp", nullable: true })
    dt_withdrawal_30days: Date;

    @Column({ type: "timestamp", nullable: true })
    dt_refund_30days: Date;
    
    @Column({ type: "timestamp", nullable: true })
    dt_withdrawal_60days: Date;

    @Column({ type: "timestamp", nullable: true })
    dt_refund_60days: Date;

    @OneToOne((type) => Kickback)
    @JoinColumn()
    kickback: Kickback;
}
