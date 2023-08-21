import {
  Container,
  ContainerActions,
  Count,
  Icon,
  Location,
  Logo,
} from './styles'
import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export function Navbar({ area }) {
  const { totalProduts } = useSelector(
    (rootReducer) => rootReducer.carrinhoReducer
  )

  const { city, uf } = useSelector(
    (rootReducer) => rootReducer.paymentReducer
  )

  return (
    <Container area={area}>
      {/* <Link to="../../"> */}
      <Logo />
      {/* </Link> */}
      <ContainerActions>
        <Location>
          <MapPin color="#8047F8" size={16} weight="fill" />
          {city} {uf}
        </Location>
        <Icon>
          <ShoppingCartSimple color="#C47F17" size={22} weight="fill" />
        </Icon>
        <Count>{totalProduts}</Count>
      </ContainerActions>
    </Container>
  )
}
