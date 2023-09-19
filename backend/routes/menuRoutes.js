import { Router } from 'express';
import { getMenu } from '../controllers/menuController';

const menuRouter = Router();

menuRouter.get('/menu', getMenu);

export default menuRouter;
