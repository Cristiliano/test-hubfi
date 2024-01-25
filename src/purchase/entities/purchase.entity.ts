import { Product } from "src/product/entities/product.entity";
import { User } from "src/user/entities/user.entity";
import { 
    Column,
    Entity, 
    JoinColumn, 
    JoinTable, 
    ManyToMany, 
    ManyToOne, 
    PrimaryGeneratedColumn 
} from "typeorm";

@Entity({ name: 'purchase' })
export class Purchase {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp' })
    date_time: Date;

    @ManyToOne((type) => User)
    @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
    user: User;

    @ManyToMany((type) => Product, (product) => product.purchases)
    @JoinTable()
    products: Product[];
}
