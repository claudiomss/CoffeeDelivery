import { Container, TextSubtitle, TextTitle } from './styles'

export function HomeTitle({ area }) {
  return (
    <Container area={area}>
      <TextTitle>Encontre o café perfeito para qualquer hora do dia</TextTitle>
      <TextSubtitle>
        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
      </TextSubtitle>
    </Container>
  )
}
