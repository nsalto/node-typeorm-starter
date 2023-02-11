import { Router } from "express";
import { getAllBusinesses } from "../../controllers/business";
import checkQueryParams from "../../middlewares/checkQueryParams";

const businessRoutes = Router();

businessRoutes.get("/", checkQueryParams([], ["id_user", "category", "coordinates"]), getAllBusinesses);

export default businessRoutes;
