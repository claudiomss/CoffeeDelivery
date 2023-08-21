import { styled } from 'styled-components'
import logo from '../../assets/logo.svg'

export const Container = styled.div`
  /* width: calc(-2 * 16rem + 1440px); */
  /* width: calc(-2 * 16rem + 1440px); */
  height: 104px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: ${(props) => props.area};

  @media screen and (min-width: 1024px) {
    padding: 0 3rem 0 0;
  }
`

export const Logo = styled.div`
  width: 85px;
  height: 40px;
  background-image: url(${logo});
`

export const ContainerActions = styled.div`
  display: flex;
  gap: 1.2rem;
  width: 20rem;
  height: 38px;

  @media screen and (min-width: 320px) {
    width: 18rem;
    gap: 0.5rem;
  }
`
export const Location = styled.div`
  display: flex;
  align-items: center;
  background-color: #ebe5f9;
  padding: 8px;
  width: 143px;
  color: #4b2995;
  font-family: var(--Font-Text);
  font-size: 1.4rem;
  border-radius: 6px;
  gap: 4px;
`
export const Icon = styled.div`
  /* position: relative; */
  display: flex;
  background-color: #f1e9c9;
  padding: 8px;
  border-radius: 6px;
`
export const Count = styled.div`
  position: relative;

  top: -0.6rem;
  right: 2rem;
  font-family: var(--Font-Text);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  width: 2.5rem;
  height: 1.7rem;
  border-radius: 999px;
  background-color: #c47f17;
`
