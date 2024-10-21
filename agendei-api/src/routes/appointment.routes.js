import express from "express";
import AppointmentController from "../controllers/appointment.controller.js";

const routes = express.Router();
const controller = new AppointmentController();

routes.get("/", controller.listarPorUsuario);
routes.post("/", controller.incluir);
routes.delete("/:id_appointment", controller.excluir);


export default routes;
