import { Router } from 'express';
import { LoginController } from '../controllers/LoginController';
import requestHandlerMiddleware from '../middlewares/requestHandlerMiddleware';

const loginRoutes = Router();

loginRoutes.post('/', requestHandlerMiddleware(new LoginController().login));

export default loginRoutes;
