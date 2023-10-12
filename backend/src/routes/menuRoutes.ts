import express, { Router } from "express";
import { getMenu } from "../controllers/menuController.js";

const menuRouter: Router = express.Router();

menuRouter.get("/", getMenu);

export default menuRouter;
