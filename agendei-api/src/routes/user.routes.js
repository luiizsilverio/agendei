import express from "express";
import UserController from "../controllers/user.controller.js";
import jwt from "../middleware/token.js";

const routes = express.Router();
const controller = new UserController();

routes.post("/register",  controller.incluir);
routes.post("/login",     controller.login);
// routes.put("/:id_doctor", controller.alterar);
// routes.delete("/:id_doctor", controller.excluir);


export default routes;
