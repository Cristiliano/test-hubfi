import { Purchase } from "src/purchase/entities/purchase.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'user' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    firstName: string;

    @Column({ length: 255 })
    lastName: string;

    @OneToMany((type) => Purchase, (purchase) => purchase.user)
    purchases: Purchase[];
}
