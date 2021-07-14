import { PokemonAPI } from "../data/PokemonAPI";
import { Authenticator } from "../services/Authenticator";


export class PokemonBusiness {
  constructor(
    private pokemonAPI: PokemonAPI,
    private authenticator: Authenticator
  ) {}

  public async fetchAllPokemons (token: string){

    this.authenticator.getData(token)

  }


}
