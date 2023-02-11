import dbConnection from "../connection";
import { faker } from '@faker-js/faker';
import { Business } from "../../entities/Business.entity";
import { Address } from "../../entities/BusinessAddress.entity";
import { User } from "../../entities/User.entity";
import { SocialMedia } from "../../entities/SocialMedia.entity";
import { Category } from "../../entities/BusinessCategory.entity";

const NUM_BUSINESSES = 10;

const VALID_CATEGORIES = ['category1', 'category2', 'category3', 'category4', 'category5'];
const VALID_SOCIAL_MEDIAS = ['facebook', 'twitter', 'instagram', 'tiktok'];

export async function seedBusinesses() {
    const businesses = [];
    const addresses = [];
    const users = [];
    const socialMedias = [];
    const categories = [];

    for (let i = 0; i < NUM_BUSINESSES; i++) {
        const address = new Address();
        address.street = faker.address.street()
        address.city = faker.address.city();
        address.state = faker.address.state();
        address.country = faker.address.country();
        address.zipCode = faker.address.zipCode();
        address.latitude = parseFloat(faker.address.latitude());
        address.longitude = parseFloat(faker.address.longitude());
        addresses.push(address);

        const user = new User();
        user.name = faker.name.fullName();
        user.email = faker.internet.email();
        user.password = faker.internet.password();
        users.push(user);

        const socialMedia = new SocialMedia();
        socialMedia.name = faker.helpers.arrayElement(VALID_SOCIAL_MEDIAS);
        socialMedia.link = faker.internet.url();
        socialMedias.push(socialMedia);

        const category = new Category();
        category.name = faker.helpers.arrayElement(VALID_CATEGORIES);
        categories.push(category);
        
        const business = new Business();
        business.name = faker.company.name();
        business.address = address;
        business.user = user;
        business.categories = [category];
        business.socialMedias = [socialMedia];
        businesses.push(business);
    }

    await dbConnection.getRepository(Address).save(addresses);
    await dbConnection.getRepository(User).save(users);
    await dbConnection.getRepository(SocialMedia).save(socialMedias);
    await dbConnection.getRepository(Category).save(categories);
    await dbConnection.getRepository(Business).save(businesses);
}
