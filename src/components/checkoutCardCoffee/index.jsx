import { Minus, Plus, Trash } from 'phosphor-react'
import {
  ButtonConfirmar,
  ButtonDelete,
  ContainerButtonConfirmar,
  ContainerButtonDelete,
  ContainerCardPay,
  ContainerCoffeeCardPay,
  ContainerCountCard,
  ContainerDetail,
  ContainerDetailTotal,
  ContainerTotal,
  ImageCoffee,
  Line,
  Price,
  Title,
} from './styles'

import { useSelector, useDispatch } from 'react-redux'
import {
  actionSubtractCoffee,
  actionDeleteCoffee,
  actionAddCoffee,
  actionResetCoffee,
} from '../../redux/carrinho/actions'
import { Link } from 'react-router-dom'

const CardPay = ({ prods }) => {
  const dispatch = useDispatch()

  const subtractCoffee = () => {
    dispatch(actionSubtractCoffee(prods))
  }

  const deleteCoffee = () => {
    dispatch(actionDeleteCoffee(prods))
  }

  const addCoffee = () => {
    dispatch(actionAddCoffee(prods))
  }

  return (
    <>
      <ContainerCardPay>
        <ImageCoffee>
          <img src={prods.imagem} width="64" alt="" />
        </ImageCoffee>

        <Title>{prods.title}</Title>

        <ContainerCountCard>
          <button onClick={subtractCoffee}>
            <Minus color="#8047F8" size={14} weight="bold" />
          </button>
          <span>{prods.amount}</span>
          <button onClick={addCoffee}>
            <Plus color="#8047F8" size={14} weight="bold" />
          </button>
        </ContainerCountCard>
        <ContainerButtonDelete>
          <ButtonDelete onClick={deleteCoffee}>
            <Trash color="#8047F8" size={14} />
            remover
          </ButtonDelete>
        </ContainerButtonDelete>

        {/* <Price>R$ {parseFloat(prods.price).toFixed(2)}</Price> */}
        <Price>R$ {parseFloat(prods.price * prods.amount).toFixed(2)}</Price>
      </ContainerCardPay>
      <Line />
    </>
  )
}

export function CoffeCardPay({ area }) {
  const { totalProduts, listCoffees, totalPrice } = useSelector(
    (rootReducer) => rootReducer.carrinhoReducer
  )
  return (
    <ContainerCoffeeCardPay area={area}>
      {listCoffees.map((prods) => (
        <CardPay key={prods.id} prods={prods} />
      ))}
      <ContainerTotal>
        <ContainerDetail>
          Total de itens <span>x {totalProduts}</span>
        </ContainerDetail>
        <ContainerDetail>
          Entrega <span>R$ {parseFloat(totalPrice * 0.1).toFixed(2)}</span>
        </ContainerDetail>
        <ContainerDetailTotal>
          Total <span>R$ {parseFloat(totalPrice).toFixed(2)}</span>
        </ContainerDetailTotal>
      </ContainerTotal>
      <Link to="./sucess">
        <ContainerButtonConfirmar onClick={actionResetCoffee()}>
            <ButtonConfirmar>Confirmar Pedido</ButtonConfirmar>
        </ContainerButtonConfirmar>
      </Link>
    </ContainerCoffeeCardPay>
  )
}
