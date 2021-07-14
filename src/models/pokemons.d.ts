export type PokemonsSimpleListT = {
  count: number,
  next: string | null,
  previous: string | null,
  results: PokemonSimpleInfoT []
};

export type PokemonSimpleInfoT = {
  name: string,
  url: string
}
