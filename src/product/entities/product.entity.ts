import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'product' })
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    name: string;
}
