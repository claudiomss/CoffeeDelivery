import { styled } from 'styled-components'

export const ContainerPayment = styled.div`
  box-sizing: border-box;
  /* width: 64rem; */
  height: 30rem;
  padding: 2rem 3rem;
  background-color: #ededed;
  border-radius: 6px;
  grid-area: ${(props) => props.area};

  @media screen and (min-width: 768px) {
    padding: 4rem;
    height: 20rem;
  }

  @media screen and (min-width: 1024px) {
    width: 55rem;
  }
`
export const ContainerPaymentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  margin-top: 1.2rem;

  :hover {
    transition: 0.3s;
    background-color: #d7d5d5;
  }

  .ativo {
    background-color: #ebe5f9;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`

export const MethodPayCard = styled.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  /* justify-content: space-evenly; */
  /* width: 17.8rem; */
  height: 5.1rem;
  background-color: #e6e5e5;
  color: #574f4d;
  padding: 1.6rem;

  gap: 1.2rem;
  font-family: var(--Font-Text);
  font-size: 1.2rem;
  line-height: var(--Font-Height-2);
  text-transform: uppercase;
  border-radius: 6px;
  border: 1px solid #e6e5e5;

  @media screen and (min-width: 768px) {
    width: 17.8rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 0 0 0.8rem;
    gap: 0.5rem;
  }
`
