import express from "express";
import UserController from "../controllers/user.controller.js";
import jwt from "../middleware/token.js";

const routes = express.Router();
const controller = new UserController();

routes.post("/register", controller.incluir);
routes.post("/login",    controller.login);
routes.get("/profile",   jwt.validateToken, controller.profile);


export default routes;
