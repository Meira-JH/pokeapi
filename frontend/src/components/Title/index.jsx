import * as S from './styles'

const Title = ({children}) => {
  return (
    <S.TitleContainer>
      <S.Image src={'static/img/pokebola.png'} />
      <S.Title>{children}</S.Title>
    </S.TitleContainer>
  )
}

export default Title
