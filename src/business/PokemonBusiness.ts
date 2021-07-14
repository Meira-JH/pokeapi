import { PokemonAPI } from "../data/PokemonAPI";
import { PokemonsSimpleListT } from "../models/pokemons";
import { Authenticator } from "../services/Authenticator";


export class PokemonBusiness {
  constructor(
    private pokemonAPI: PokemonAPI,
    private authenticator: Authenticator
  ) {}

  public async fetchAllPokemons  (token: string): Promise<PokemonsSimpleListT[]>{

    this.authenticator.getData(token)

    const pokemonList = await this.pokemonAPI.fetchAllPokemons()

    return pokemonList
  }


}
