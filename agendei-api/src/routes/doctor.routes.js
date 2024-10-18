import express from "express";
import DoctorController from "../controllers/doctors.controller.js";
// import upload from "../config/multer.js";

const routes = express.Router();
const controller = new DoctorController();

routes.get('/', controller.index);



export default routes;
