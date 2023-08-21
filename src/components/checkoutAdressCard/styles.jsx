import { styled } from 'styled-components'

export const ContainerEndCard = styled.div`
  box-sizing: border-box;
  /* width: 64rem; */

  height: 50rem;
  margin-bottom: 2rem;
  /* padding: 4rem; */
  padding: 2rem 3rem;
  background-color: #ededed;
  border-radius: 6px;
  grid-area: ${(props) => props.area};

  @media screen and (min-width: 425px) {
    padding: 4rem;
    height: 54rem;
  }

  @media screen and (min-width: 768px) {
    height: 38rem;
  }

  @media screen and (min-width: 1024px) {
    width: 55rem;
    /* max-width: 64rem; */
  }
`
export const ContainerTitle = styled.div`
  /* width: 56rem; */
  height: 4.4rem;
  margin-bottom: 3.2rem;
`
export const Title = styled.div`
  font-family: var(--Font-Text);
  font-size: 1.6rem;
  color: #403937;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -1rem;
  gap: 0.8rem;

  @media screen and (min-width: 768px) {
    justify-content: start;
  }
`
export const SubTitle = styled.div`
  text-align: center;
  font-family: var(--Font-Text);
  font-size: 1.4rem;
  color: #574f4d;
  margin: 0.7rem 0;

  @media screen and (min-width: 768px) {
    text-align: start;
    margin: 0.7rem 2rem;
  }
`
export const ContainerForm = styled.form`
  /* width: 56rem; */
  height: 21.6rem;
  display: flex;
  flex-direction: column;

  gap: 1.6rem 1.2rem;
`

const Input = styled.input`
  padding: 1.2rem;
  box-sizing: border-box;
  background-color: #e6e5e5;
  font-family: var(--Font-Text);
  font-size: 1.4rem;
  color: #8d8686;
  border: 1px solid #e6e5e5;

  border-radius: 6px;
  outline: none;
`

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  /* span {
    display: flex;
    align-items: center;
    font-family: var(--Font-Text);
    font-size: 1.2rem;
    font-style: italic;
    background-color: #e6e5e5;
    color: #8d8686;
    padding: 1.2rem;
    border-radius: 6px;
    margin-left: -2rem;
  } */

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const InputCep = styled(Input)`
  @media screen and (min-width: 768px) {
    width: 20rem;
  }
`
export const InputRua = styled(Input)`
  @media screen and (min-width: 768px) {
  }
`
export const InputNum = styled(Input)`
  @media screen and (min-width: 768px) {
    width: 20rem;
  }
`

export const InputComplemento = styled(Input)`
  /* width: 28.5rem; */
  @media screen and (min-width: 768px) {
    flex: 1;
  }
`
export const InputBairro = styled(Input)`
  @media screen and (min-width: 768px) {
    width: 20rem;
  }
`
export const InputCidade = styled(Input)`
  @media screen and (min-width: 768px) {
    flex: 1;
  }
`
export const InputUF = styled(Input)`
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    width: 8rem;
  }
`
