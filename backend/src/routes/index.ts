import { Router } from 'express';
import loginRoutes from './login';
import pokemonRoutes from './pokemonRoutes';

const routes = Router();

routes.use('/v1/login', loginRoutes)
routes.use('/v1/pokemon', pokemonRoutes)

export default routes;
