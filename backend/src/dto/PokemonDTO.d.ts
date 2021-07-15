export type PokemonDetailsDTO = {
id: number,
name: string,
sprite: string,
type: PokemonTypeDTO[]
};

export type PokemonTypesDTO = {
  slot: number,
  type: PokemonTypeDTO
}

export type PokemonTypeDTO = {
  name: string,
  url: string
}
