import axios, { AxiosRequestConfig } from 'axios';

export class PokemonAPI {
  private static BASE_URL = 'https://pokeapi.co/api/v2/';


  public async fetchAllPokemons() {
    const result = await axios.post(
      `${PokemonAPI.BASE_URL}/pokemon`,
    );

    return result.data;
  }

  public async fetchPokemonDetails(pokemonName: string) {
    const result = await axios.post(
      `${PokemonAPI.BASE_URL}/pokemon/${pokemonName}`,
    );

    return result.data;
  }


}
