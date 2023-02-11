import { IsIn } from "class-validator";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { Business } from "./Business.entity";
import { VALID_SOCIAL_MEDIAS } from "../utils/validators/socialMedia";

@Entity({ name: "social_media", schema: "private" })
export class SocialMedia {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    @IsIn(VALID_SOCIAL_MEDIAS)
    name: string;

    @Column({ length: 100 })
    link: string;

    @ManyToMany((type) => Business, (business) => business.socialMedias)
    businesses: Business[];
}
