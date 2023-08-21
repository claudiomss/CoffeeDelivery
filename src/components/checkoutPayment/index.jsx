import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { ContainerTitle, Title, SubTitle } from '../checkoutAdressCard/styles'
import { ContainerPayment, ContainerPaymentCard, MethodPayCard } from './styles'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { actionAddMethodPay } from '../../redux/payment/actions'

export function MethodPayment({ area }) {
  const [method, SetMethod] = useState('Dinheiro')

  const dispath = useDispatch()

  useEffect(() => {
    const pays = document.querySelectorAll('.ativo')
    pays.forEach((button) => {
      button.addEventListener('click', () => {
        pays.forEach((btn) => {
          btn.classList.remove('ativo')
        })
      })
    })
  }, [])

  const handleMethodPayment = (e) => {
    e.target.classList.add('ativo')
    dispath(actionAddMethodPay(e.target.getAttribute('method')))
  }

  return (
    <ContainerPayment area={area}>
      <ContainerTitle>
        <Title>
          <CurrencyDollar color="#8047F8" size={22} />
          Pagamento
        </Title>
        <SubTitle>
          O pagamento é feito na entrega. Escolha a forma que deseja pagar
        </SubTitle>
        <ContainerPaymentCard  onClick={handleMethodPayment}>
          <MethodPayCard
            className="ativo"
            method="Cartão de crédito"
          >
            <CreditCard color="#8047F8" size={16} value="fff" />
            Cartão de crédito
          </MethodPayCard>
          <MethodPayCard
            className="ativo"
            method="Cartão de débito"
          >
            <Bank color="#8047F8" size={16} />
            Cartão de débito
          </MethodPayCard>
          <MethodPayCard
            className="ativo"
            method="Dinheiro"
          >
            <Money color="#8047F8" size={16} />
            Dinheiro
          </MethodPayCard>
        </ContainerPaymentCard>
      </ContainerTitle>
    </ContainerPayment>
  )
}
