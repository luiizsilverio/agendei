import { Router } from "express";
import doctorRoutes from "./doctor.routes.js";
import userRoutes from "./user.routes.js";
import jwt from "../middleware/token.js";

const routes = Router();

routes.use("/doctors", jwt.validateToken, doctorRoutes);
routes.use("/users",   userRoutes);

export default routes;
