import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import * as S from "./styles";
import PokeCard from "components/PokeCard";
import useInput from "hooks/useInput";
import Filter from "components/Filter";
import Title from "components/Title";
import Loading from "components/Loading";
import { useTheme } from "styled-components";
import { fetchPokemons } from "../../api/fetchPokemons";

const filterInitialValues = {
  search: "",
  type: "",
  order: "",
};

const List = (props) => {
  const [loading, setLoading] = useState(false);
  const listSize = useRef(0);
  const cards = useRef();
  const filter = useInput(filterInitialValues);
  const option = useRef(filterInitialValues);
  const [pokemonList, setPokemonList] = useState([]);
  const theme = useTheme();
  const end = useRef(false);

  useEffect(async () => {
    const pokemons = await fetchPokemons();
    setPokemonList(pokemons.data);
  }, []);

  const handleScroll = useCallback(
    async (e) => {
      const windowSize = window.innerHeight;
      const { bottom, top } = cards.current.getBoundingClientRect();
      if (windowSize - bottom >= 0 && pokemonList.length !== listSize.current) {
        listSize.current = pokemonList?.length || 0;
        setLoading(true)
        const fetchMore = await fetchPokemons(
          pokemonList.length + 20,
          pokemonList.length
        );

        setPokemonList((pokemonList) => [
          ...pokemonList,
          ...fetchMore.data,
        ]);
        end.current = true;
        setLoading(false);

        if (!end.current) setLoading(true);
      }
    },
    [pokemonList]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <Filter filter={filter} />
      <S.CardContainer ref={cards}>
        {pokemonList?.length ? (
          pokemonList
            .sort((a, b) => a.id - b.id)
            .map((pokemon) => <PokeCard key={pokemon.id} {...pokemon} />)
        ) : (
          <Loading />
        )}
      </S.CardContainer>
      {loading && <Loading size={"50px"} />}
    </>
  );
};

export default List;
