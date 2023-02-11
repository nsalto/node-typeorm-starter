import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Business } from "./Business.entity";

@Entity({ name: "business_address", schema: "private" })
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    street: string;

    @Column({ length: 100 })
    city: string;

    @Column({ length: 100 })
    state: string;

    @Column({ length: 100 })
    country: string;

    @Column({ length: 100 })
    zipCode: string;

    @Column({ type: "float" })
    latitude: number;

    @Column({ type: "float" })
    longitude: number;

    @OneToOne((type) => Business, (business) => business.address)
    @JoinColumn()
    business: Business;
}
