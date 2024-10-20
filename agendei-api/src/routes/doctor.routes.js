import express from "express";
import DoctorController from "../controllers/doctor.controller.js";
// import upload from "../config/multer.js";

const routes = express.Router();
const controller = new DoctorController();

routes.get("/",  controller.listar);
routes.post("/", controller.incluir);
routes.put("/:id_doctor", controller.alterar);
routes.delete("/:id_doctor", controller.excluir);


export default routes;