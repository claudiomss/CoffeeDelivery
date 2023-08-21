import { styled } from 'styled-components'

export const Container = styled.div`
  transform: translate(1px, 1px);
  width: 87.7vw;
  height: 27rem;
  box-sizing: border-box;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.2rem;
  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;
  background-color: #ffffff;

  @media screen and (min-width: 1024px) {
    display: flex;
    width: 52.7rem;
  }
`
export const Border = styled.div`
  width: 88vw;
  height: 27.3rem;
  background: linear-gradient(to bottom right, #dbac2c, #8047f8);
  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;
  grid-area: ${(props) => props.area};
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    width: 53rem;
    margin: 0;
  }
`

export const ContainerOrder = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 3.2rem auto;
  gap: 0 1.2rem;
  grid-template-areas:
    'icone desc1'
    'icone desc2';

  @media screen and (min-width: 768px) {
    padding: 0 15vw;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 5rem;
    width: 35.4rem;
    height: 4.2rem;
  }
`
export const Icon = styled.div`
  padding: 0.8rem;
  border-radius: 999px;
  background-color: ${(props) => props.bgcolor};
  display: flex;
  grid-area: icone;
`
export const Description = styled.div`
  font-family: var(--Font-Text);
  font-size: 1.6rem;
  color: #574f4d;
  grid-area: ${(props) => props.area};
  span {
    font-weight: bold;
  }
`
