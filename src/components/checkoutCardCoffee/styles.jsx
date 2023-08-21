import { styled } from 'styled-components'

export const ContainerCoffeeCardPay = styled.div`
  padding: 2rem;
  box-sizing: border-box;
  border-top-right-radius: 44px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 44px;
  background-color: #f3f2f2;
  grid-area: ${(props) => props.area};

  @media screen and (min-width: 425px) {
    padding: 3rem 4rem 4rem 4em;
  }

  @media screen and (min-width: 768px) {
    padding: 6rem 12rem 6rem 12em;
  }

  @media screen and (min-width: 1024px) {
    padding: 4rem 3rem;
    width: 40rem;
  }
`
export const ContainerCardPay = styled.div`
  box-sizing: border-box;
  height: 8rem;
  display: grid;
  align-items: center;
  grid-template-columns: 5.4rem 6.4rem 8rem;
  gap: 0.3rem 2rem;
  padding: 0.8rem 0.4rem;

  grid-template-areas:
    'imagem title title'
    'imagem price price'
    'imagem . . '
    'imagem count delete ';

  @media screen and (min-width: 768px) {
    grid-template-columns: 6.4rem 7.2rem 12rem;
    gap: 1.3rem 2rem;
    grid-template-areas:
      'imagem title title price'
      'imagem count delete .';
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 6.4rem 7.2rem 5rem;
    gap: 0.3rem 2rem;
  }
`
export const ImageCoffee = styled.div`
  width: 6.4rem;
  height: 6.4rem;
  display: flex;

  grid-area: imagem;
`

export const ContainerDetails = styled.div`
  width: 17.1rem;
  height: 6.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  font-family: var(--Font-Text);
  font-size: 1.6rem;
  color: #403937;
`

export const Title = styled.div`
  font-family: var(--Font-Text);
  font-size: 1.6rem;
  color: #403937;
  grid-area: title;
`

export const ContainerQuantity = styled.div`
  width: 17.1rem;
  height: 3.2rem;
  display: flex;
  gap: 0.8rem;
  border: 2px solid black;
`
export const ContainerCountCard = styled.div`
  width: 72px;
  box-sizing: border-box;
  height: 3.2rem;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  background-color: #e6e5e5;
  padding: 8px;
  border-radius: 6px;
  grid-area: count;

  button {
    border: none;
    background-color: #e6e5e5;
  }

  span {
    font-family: var(--Font-Text);
    font-size: 1.6rem;
  }
`
export const ContainerButtonDelete = styled.div`
  :hover {
    transition: 0.3s;
    background-color: #d7d5d5;
  }
`

export const ButtonDelete = styled.button`
  width: 9.1rem;
  height: 3.2rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  height: 3.2rem;
  padding: 0 0.8rem;
  font-family: var(--Font-Text);
  font-size: 1.2rem;
  color: #574f4d;
  text-transform: uppercase;
  grid-area: delete;
  border: none;
  border-radius: 6px;
  background-color: #e6e5e5;
`
export const Price = styled.div`
  font-family: var(--Font-Text);
  font-weight: bold;
  font-size: 1.6rem;
  color: #574f4d;
  grid-area: price;
`

export const Line = styled.hr`
  color: rgb(255, 255, 30);
  margin: 2.4rem 0;
`

export const ContainerTotal = styled.div`
  height: 9.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`
export const ContainerDetail = styled.div`
  font-family: var(--Font-Text);
  font-size: 1.4rem;
  color: #574f4d;
  display: flex;
  justify-content: space-between;

  span {
    font-size: 1.6rem;
  }
`

export const ContainerDetailTotal = styled.div`
  font-family: var(--Font-Text);
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  color: #403937;
`

export const ButtonConfirmar = styled.button`
  margin-top: 2.4rem;
  box-sizing: border-box;
  font-family: var(--Font-Text);
  font-weight: bold;
  line-height: var(--Font-Height-2);
  text-transform: uppercase;
  font-size: 1.4rem;
  padding: 1.2rem 0.8rem;
  width: 90%;
  justify-content: center;
  background-color: #dbac2c;
  color: #ffffff;
  height: 4.6rem;
  border: none;
  border-radius: 6px;

  @media screen and (min-width: 425px) {
    width: 28rem;
  }

  @media screen and (min-width: 768px) {
    width: 50rem;
  }

  @media screen and (min-width: 1024px) {
    width: 30rem;
  }
`

export const ContainerButtonConfirmar = styled.button`
  width: 100%;
  border: none;

  button {
    border: none;
  }
  :hover {
    transition: 0.3s;
    background-color: #c47f17;
  }
`
