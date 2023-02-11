import { Request, Response } from "express";
import { BusinessService } from "../services/business.service";
import logger from "../utils/logger";
import { CustomError } from "../middlewares/error";
import { getBusinessesWithinRadius } from "../utils/nearestBusiness";

export const getAllBusinesses = async (request: Request, response: Response) => {
    const { id_user, category, coordinates } = request.query;
    logger.info(request.query)
    logger.info(coordinates)
    const businessService = new BusinessService();
    const businesses = await businessService.getAllBusinesses(id_user, category, coordinates);
    if (businesses.length === 0) {
        response.json({ message: "No results found." });
    }

    return response.json(businesses);
};
