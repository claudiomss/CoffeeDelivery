import {
  Container,
  ContainerBottomCard,
  ContainerCard,
  ContainerCountCard,
  ContainerIconCard,
  IconCard,
  ImageCard,
  Price,
  SubTitleCard,
  TypeCard,
  TypeCardContainer,
  TitleCard,
} from './styles'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
import { actionAddCart } from '../../redux/carrinho/actions'
import { useDispatch } from 'react-redux'
import { coffees } from '../../data/products'
import { Link } from 'react-router-dom'

const Card = ({ coffees }) => {
  const [amountCoffe, setAmountCoffe] = useState(0)
  const dispatch = useDispatch()

  const addCart = () => {
    if (amountCoffe > 0) {
      dispatch(actionAddCart({ amount: amountCoffe, listCoffees: coffees }))
      setAmountCoffe(0)
    }
  }

  const addCoffee = () => {
    setAmountCoffe(amountCoffe + 1)
  }

  const subtractCoffee = () => {
    if (amountCoffe > 0) {
      setAmountCoffe(amountCoffe - 1)
    }
  }
  return (
    <ContainerCard>
      <ImageCard imagem={coffees.imagem} />
      <TypeCardContainer>
        <TypeCard>{coffees.type}</TypeCard>
      </TypeCardContainer>
      <TitleCard>{coffees.title}</TitleCard>
      <SubTitleCard>{coffees.subTitle}</SubTitleCard>
      <ContainerBottomCard>
        <Price>
          R$<span>{coffees.price.toFixed(2)}</span>
        </Price>
        <ContainerCountCard>
          <button onClick={subtractCoffee}>
            <Minus size={14} weight="bold" />
          </button>
          <span>{amountCoffe}</span>
          <button onClick={addCoffee}>
            <Plus size={14} weight="bold" />
          </button>
        </ContainerCountCard>
        <ContainerIconCard onClick={addCart}>
          <IconCard>
            <Link to="/checkout">
              <ShoppingCartSimple color="#F3F2F2" size={22} weight="fill" />
            </Link>
          </IconCard>
        </ContainerIconCard>
      </ContainerBottomCard>
    </ContainerCard>
  )
}

export const CardCoffee = ({ area }) => {
  return (
    <>
      <Container area={area}>
        {coffees.map((coffees) => (
          <Card key={coffees.imagem} coffees={coffees} />
        ))}
      </Container>
    </>
  )
}
