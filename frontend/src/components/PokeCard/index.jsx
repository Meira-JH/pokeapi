import * as S from './styles'

const PokeCard = props => {
  return (
    <S.CardContainer
      onClick={() => go.detail(props.name)}
    >
      <S.PokeId>#{props.id}</S.PokeId>
      <S.PokeName>{props.name}</S.PokeName>
      <S.PokeImg src={props.sprite} />
    </S.CardContainer>
  )
}

export default PokeCard
