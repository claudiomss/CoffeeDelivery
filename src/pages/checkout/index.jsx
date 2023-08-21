import { CoffeCardPay } from '../../components/checkoutCardCoffee'
import { EndCard } from '../../components/checkoutAdressCard'
import { Navbar } from '../../components/navbar'
import { MethodPayment } from '../../components/checkoutPayment'
import { TitlePay } from '../../components/checkoutTitlepay'
import { ContainerCheckout } from './styles'

export function Checkout() {
  return (
    <>
      <ContainerCheckout>
        <Navbar area="nav" />
        <TitlePay text="Complete seu pedido" area="titlepay" />
        <EndCard area="endcard" />
        <MethodPayment area="payment" />
        <TitlePay text="Café selecionados" area="titlepay2" />
        <CoffeCardPay area="cfcardpay" />
      </ContainerCheckout>
    </>
  )
}
