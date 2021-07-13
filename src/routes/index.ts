import { Router } from 'express';
import loginRoutes from './login';

const routes = Router();

routes.use('/v1/login', loginRoutes)

export default routes;
