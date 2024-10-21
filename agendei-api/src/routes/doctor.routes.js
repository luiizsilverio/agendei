import express from "express";
import DoctorController from "../controllers/doctor.controller.js";

const routes = express.Router();
const controller = new DoctorController();

routes.get("/",  controller.listar);
routes.post("/", controller.incluir);
routes.put("/:id_doctor", controller.alterar);
routes.delete("/:id_doctor", controller.excluir);
routes.get("/:id_doctor/services", controller.listarServicos);


export default routes;
