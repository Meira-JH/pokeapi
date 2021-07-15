import {useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react'
import * as S from './styles'
import PokeCard from 'components/PokeCard'
import usePokeapi from 'hooks/usePokeapi'
import useInput from 'hooks/useInput'
import Filter from 'components/Filter'
import Title from 'components/Title'
import Loading from 'components/Loading'
import {useTheme} from 'styled-components'

const filterInitialValues = {
  search: '',
  type: '',
  order: ''
}

const Home = props => {
  const [loading, setLoading] = useState(false)
  const listSize = useRef(0)
  const cards = useRef()
  const filter = useInput(filterInitialValues)
  const option = useRef(filterInitialValues)
  const [pokemonList, setPokemonList, clearList, filterName] = usePokeapi(
    'pokemon',
    'name'
  )
  const theme = useTheme()
  const end = useRef(false)

  return (
    <>
      <Title>List of all Pokemons</Title>
      <Filter filter={filter} reset={startAgain} />
      <S.CardContainer ref={cards}>
        {pokemonList?.length ? (
          pokemonList
            .sort((a, b) => a.id - b.id)
            .map(pokemon => <PokeCard key={pokemon.id} {...pokemon} />)
        ) : (
          <Loading />
        )}
      </S.CardContainer>
      {loading && <Loading size={50} />}
    </>
  )
}

export default Home
