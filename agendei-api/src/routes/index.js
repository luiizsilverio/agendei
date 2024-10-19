import { Router } from "express";
import doctorRoutes from "./doctor.routes.js";

const routes = Router();

routes.use("/doctors", doctorRoutes);

export default routes;
