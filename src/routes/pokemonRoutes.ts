import { Router } from 'express';
import { PokemonController } from '../controllers/PokemonController';
import requestHandlerMiddleware from '../middlewares/requestHandlerMiddleware';

const pokemonRoutes = Router();

pokemonRoutes.get('/', requestHandlerMiddleware(new PokemonController().fetchPokemonsList));
pokemonRoutes.get('/:name', requestHandlerMiddleware(new PokemonController().fetchPokemon));

export default pokemonRoutes;
