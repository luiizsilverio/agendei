import { Router } from "express";
import doctorRoutes from "./doctor.routes.js";
import userRoutes from "./user.routes.js";
import appointmentRoutes from "./appointment.routes.js";
import jwt from "../middleware/token.js";

const routes = Router();

routes.use("/users",    userRoutes);
routes.use("/doctors",  jwt.validateToken, doctorRoutes);
routes.use("/appointments",  jwt.validateToken, appointmentRoutes);

export default routes;
