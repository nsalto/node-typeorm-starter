import { Business } from "../entities/Business.entity";
import dbConnection from "../database/connection";
import { getBusinessesWithinRadius } from "../utils/nearestBusiness";
export class BusinessService {
    async getAllBusinesses(id_user?: any, category?: any, coordinates?: any): Promise<Business[]> {
        const businessRepository = dbConnection.getRepository(Business);
        let query = businessRepository
            .createQueryBuilder("business")
            .leftJoinAndSelect("business.address", "address")
            .leftJoinAndSelect("business.socialMedias", "socialMedias")
            .leftJoinAndSelect("business.categories", "categories")
            .leftJoinAndSelect("business.user", "user");
        if (id_user) {
            query = query.where("business.user.id = :id_user", { id_user });
        }
        if (category) {
            const categories = Array.from(category.split(","), Number);
            query = query.andWhere("categories.id IN (:...categories)", { categories });
            const asd = await query.getMany()
        }
        if (coordinates) {
            const [latitude, longitude] = Array.from(coordinates.split(","), Number);
            const manyBusiness = await query.getMany();
            return getBusinessesWithinRadius(manyBusiness, latitude, longitude, 12000);
        }

        return await query.getMany();
    }
}
