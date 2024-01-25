import { Kickback } from "src/kickback/entities/kickback.entity";
import { Purchase } from "src/purchase/entities/purchase.entity";
import { 
    Column, 
    Entity, 
    JoinColumn, 
    JoinTable, 
    ManyToMany, 
    OneToOne, 
    PrimaryGeneratedColumn 
} from "typeorm";

@Entity({ name: 'product' })
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    name: string;

    @Column({
        type: 'decimal',
        precision: 4,
        scale: 2
    })
    value: number;

    @ManyToMany((type) => Purchase, (purchase) => purchase.products)
    @JoinTable()
    purchases: Purchase[];

    @OneToOne((type) => Kickback)
    @JoinColumn()
    kickback: Kickback;
}
