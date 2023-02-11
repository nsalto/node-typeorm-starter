import { Router } from "express";
import businessRoutes from "./business.routes";

const v1Router = Router();

v1Router.use("/business", businessRoutes);

export default v1Router;
