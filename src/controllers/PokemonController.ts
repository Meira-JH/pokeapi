import { Request, Response } from 'express';
import { PokemonBusiness } from '../business/PokemonBusiness';
import { PokemonAPI } from '../data/PokemonAPI';
import { PokemonDetailsDTO } from '../dto/PokemonDTO';
import { ERROR_MESSAGE } from '../models/errorMessage';
import { Authenticator } from '../services/Authenticator';
import { ThrowOn } from '../services/ThrowOn';

export class PokemonController {
  async fetchPokemonsList(request: Request, response: Response) {

    // NOTE: need to pass path params and configure paging
    const token = request.headers.token as string;

    ThrowOn.validateField(token, {
      message: ERROR_MESSAGE.NOT_AUTHORIZED,
      status: 403,
    });

    const pokemonBusiness = new PokemonBusiness(
      new PokemonAPI(),
      new Authenticator()
    );

    const pokemonsList = await pokemonBusiness.fetchAllPokemons(token);

    const detailedPokemonsList : PokemonDetailsDTO[] = []


    for (const pokemon of pokemonsList?.results) {

      const pokemonDetails = await pokemonBusiness.fetchPokemonDetails(token, pokemon.name)

      detailedPokemonsList.push({
        id: pokemonDetails.id,
        name: pokemonDetails.name,
        sprite: pokemonDetails.sprites.other['official-artwork'].front_default,
        type: pokemonDetails.types
      })
    }

    response.status(200).send(detailedPokemonsList);
  }
  async fetchPokemon(request: Request, response: Response) {

    // NOTE: need to pass path params and configure paging
    const token = request.headers.token as string;
    const pokemonName = request.params.name

    ThrowOn.validateField(token, {
      message: ERROR_MESSAGE.NOT_AUTHORIZED,
      status: 403,
    });

    const pokemonBusiness = new PokemonBusiness(
      new PokemonAPI(),
      new Authenticator()
    );

      const pokemonDetails = await pokemonBusiness.fetchPokemonDetails(token, pokemonName)

    response.status(200).send(pokemonDetails);
  }
}
