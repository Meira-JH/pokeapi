import { Request, Response } from 'express';
import { PokemonBusiness } from '../business/PokemonBusiness';
import { PokemonAPI } from '../data/PokemonAPI';
import { PokemonDetailsDTO } from '../dto/PokemonDTO';
import { ERROR_MESSAGE } from '../models/errorMessage';
import { Authenticator } from '../services/Authenticator';
import { ThrowOn } from '../services/ThrowOn';

export class PokemonController {

  async fetchPokemonsList(request: Request, response: Response) {

    const token = request.headers.token as string;
    const limit = Number(request.query.limit)
      ? Number(request.query.limit)
      : Number(process.env.QUERY_LIMIT_FETCH_POKEMONS);
    const offset =
      Number(request.query.offset) > 0
        ? Number(request.query.offset)
        : Number(process.env.QUERY_OFFSET_FETCH_POKEMONS);

    ThrowOn.validateField(token, {
      message: ERROR_MESSAGE.NOT_AUTHORIZED,
      status: 403,
    });

    const user = new Authenticator().getData(token);
    ThrowOn.validateField(user, {
      message: ERROR_MESSAGE.NOT_AUTHORIZED,
      status: 403
    })

    const pokemonBusiness = new PokemonBusiness(
      new PokemonAPI(),
    );

    const allPokemons = await pokemonBusiness.fetchAllPokemons(
      limit,
      offset
    );

    response.status(200).send(allPokemons);
  }

  async fetchPokemon(request: Request, response: Response) {
    const token = request.headers.token as string;
    const pokemonName = request.params.name as string;

    ThrowOn.validateField(token, {
      message: ERROR_MESSAGE.NOT_AUTHORIZED,
      status: 403,
    });

    //NOTE: bring auth to controller
    const pokemonBusiness = new PokemonBusiness(
      new PokemonAPI(),
    );

    const pokemonDetails = await pokemonBusiness.fetchPokemonDetails(
      token,
      pokemonName
    );

    response.status(200).send(pokemonDetails);
  }
}
