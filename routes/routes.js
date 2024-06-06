import { Router } from "express"
import { controler } from "../controlers/controler.js";

export const routes = Router();

routes.post("/", controler.chat);

routes.post("/image", controler.getRealistic);