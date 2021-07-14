import { Router } from 'express';
import { PokemonController } from '../controllers/PokemonController';
import requestHandlerMiddleware from '../middlewares/requestHandlerMiddleware';

const pokemonRoutes = Router();

pokemonRoutes.get('/', requestHandlerMiddleware(new PokemonController().fetchPokemonsList));

export default pokemonRoutes;
