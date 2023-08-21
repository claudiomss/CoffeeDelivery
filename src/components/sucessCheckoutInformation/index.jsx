import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Border, Container, ContainerOrder, Description, Icon } from './styles'
import { useSelector } from 'react-redux'
// import { rootReducer } from '../../redux/root-reducer'

export function SucessCheckoutInformation({ area }) {
  const { road, number, neighborhood, city, uf, methodPay } = useSelector(
    (rootReducer) => rootReducer.paymentReducer
  )

  return (
    <Border area={area}>
      <Container>
        <ContainerOrder>
          <Icon bgcolor="#8047F8">
            <MapPin color="#FAFAFA" size={16} weight="fill" />
          </Icon>
          <Description area="desc1">
            Entrega em{' '}
            <span>
              {road}, {number}
            </span>
          </Description>
          <Description area="desc2">
            {neighborhood} - {city}, {uf}
          </Description>
        </ContainerOrder>
        <ContainerOrder>
          <Icon bgcolor="#DBAC2C">
            <Timer color="#FAFAFA" size={16} weight="fill" />
          </Icon>
          <Description area="desc1">Previsão de entrega </Description>
          <Description area="desc2">
            <span>20 min - 30 min</span>
          </Description>
        </ContainerOrder>
        <ContainerOrder>
          <Icon bgcolor="#C47F17">
            <CurrencyDollar color="#FAFAFA" size={16} weight="fill" />
          </Icon>
          <Description area="desc1">Pagamento na entrega </Description>
          <Description area="desc2">
            <span>{methodPay}</span>
          </Description>
        </ContainerOrder>
      </Container>
    </Border>
  )
}
