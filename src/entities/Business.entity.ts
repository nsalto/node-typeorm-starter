import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne, JoinTable, OneToOne } from "typeorm";
import { Category } from "./BusinessCategory.entity";
import { SocialMedia } from "./SocialMedia.entity";
import { Address } from "./BusinessAddress.entity";
import { User } from "./User.entity";
import { VALID_CATEGORIES } from "../utils/validators/business";
import { IsArray, IsIn } from "class-validator";

@Entity({ name: "business", schema: "private" })
export class Business {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @ManyToMany((type) => Category, (category) => category.businesses)
    @JoinTable()
    @IsArray()
    @IsIn(VALID_CATEGORIES)
    categories: Category[];

    @ManyToOne((type) => User, (user) => user.businesses)
    user: User;

    @OneToOne((type) => Address, (address) => address.business)
    address: Address;

    @ManyToMany((type) => SocialMedia, (socialMedia) => socialMedia.businesses)
    @JoinTable()
    socialMedias: SocialMedia[];
}
