import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'purchase' })
export class Purchase {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp' })
    date_time: Date;
}
