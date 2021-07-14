import { Request, Response } from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";
import { PokemonAPI } from "../data/PokemonAPI";
import { ERROR_MESSAGE } from "../models/errorMessage";
import { Authenticator } from "../services/Authenticator";
import { ThrowOn } from "../services/ThrowOn";


export class PokemonController {

  async fetchPokemonsList(request: Request, response: Response) {

    const token = request.headers.token as string

    ThrowOn.validateField(token, {
      message: ERROR_MESSAGE.NOT_AUTHORIZED,
      status: 403,
    })

    const pokemonsList = await new PokemonBusiness(
      new PokemonAPI,
      new Authenticator
    ).fetchAllPokemons(token)

    response.status(200).send({message: 'success'});

  }
}
