import { ContainerTitleSucess, Title, SubTitle } from './styles'

export function TitleSucess({ area }) {
  return (
    <ContainerTitleSucess area={area}>
      <Title>Uhu! Pedido confirmado</Title>
      <SubTitle>Agora é só aguardar que logo o café chegará até você</SubTitle>
    </ContainerTitleSucess>
  )
}
