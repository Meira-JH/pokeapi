import { PokemonAPI } from '../data/PokemonAPI';
import { PokemonsSimpleListT } from '../models/pokemons';
import { Authenticator } from '../services/Authenticator';

export class PokemonBusiness {
  constructor(
    private pokemonAPI: PokemonAPI,
    private authenticator: Authenticator
  ) {}

  public async fetchAllPokemons(token: string, limit: number, offset: number): Promise<PokemonsSimpleListT> {
    this.authenticator.getData(token);
    const pokemonList = await this.pokemonAPI.fetchAllPokemons(limit, offset);

    return pokemonList;
  }

  public async fetchPokemonDetails(
    token: string,
    pokemonName: string
  ): Promise<any> {

    this.authenticator.getData(token);

    const pokemonDetails = await this.pokemonAPI.fetchPokemonDetails(pokemonName);

    return pokemonDetails;
  }
}
