import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Business } from './Business.entity';

@Entity({ name: 'business_category', schema: 'private' })
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @ManyToMany(type => Business, business => business.categories)
    businesses: Business[];
}
