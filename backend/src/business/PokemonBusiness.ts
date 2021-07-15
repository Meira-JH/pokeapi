import { PokemonAPI } from '../data/PokemonAPI';
import { PokemonDetailsDTO } from '../dto/PokemonDTO';
import { PokemonsSimpleListT } from '../models/pokemons';
import { Authenticator } from '../services/Authenticator';

export class PokemonBusiness {
  constructor(
    private pokemonAPI: PokemonAPI,
  ) {}

  public async fetchAllPokemons(limit: number, offset: number): Promise<PokemonDetailsDTO[]> {

    const genericPokemonsList = await this.pokemonAPI.fetchAllPokemons(limit, offset);

    const allPokemonDetails = await Promise.all(
      genericPokemonsList?.results.map(async (pokemon) =>
        this.pokemonAPI.fetchPokemonDetails(pokemon.name)
      )
    );

    function formatedPokemonsList () {
      return allPokemonDetails.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        sprite: pokemon.sprites.other['official-artwork'].front_default,
        type: pokemon.types,
      }));
    };

    const formatedList : PokemonDetailsDTO[]= formatedPokemonsList()

    return formatedList;
  }

  public async fetchPokemonDetails(
    token: string,
    pokemonName: string
  ) {

    const pokemonDetails = await this.pokemonAPI.fetchPokemonDetails(pokemonName);

    return pokemonDetails;
  }
}
