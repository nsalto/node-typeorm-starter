import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Business } from './Business.entity';

@Entity({ name: 'users', schema: 'private' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column({ length: 100 })
    email: string;

    @Column({ length: 100, nullable: true })
    password: string;

    @OneToMany(type => Business, business => business.user)
    businesses: Business[];
}
