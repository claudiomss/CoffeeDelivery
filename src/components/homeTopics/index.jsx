import { Container, Icon, Item, Item2 } from './style'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

export function Topics({ area }) {
  return (
    <Container area={area}>
      <Item>
        <Icon color="#C47F17">
          <ShoppingCart size={16} weight="fill" />
        </Icon>
        Compra simples e segura
      </Item>
      <Item2>
        <Icon color="#574F4D">
          <Package size={16} weight="fill" />
        </Icon>
        Embalagem mantém o café intacto
      </Item2>
      <Item>
        <Icon color="#DBAC2C">
          <Timer size={16} weight="fill" />
        </Icon>
        Entrega rápida e rastreada
      </Item>
      <Item2>
        <Icon color="#8047F8">
          <Coffee size={16} weight="fill" />
        </Icon>
        O café chega fresquinho até você
      </Item2>
    </Container>
  )
}
