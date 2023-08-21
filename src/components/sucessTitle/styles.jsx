import { styled } from 'styled-components'

export const ContainerTitleSucess = styled.div`
  /* width: 55.2rem; */
  /* height: 7.2rem; */
  display: flex;
  text-align: center;
  flex-direction: column;
  /* gap: 0.4rem; */
  margin: 2rem 0rem;
  grid-area: ${(props) => props.area};

  @media screen and (min-width: 1024px) {
    height: 7.2rem;
    gap: 0.4rem;
    margin: 0;
    text-align: start;
  }
`
export const Title = styled.div`
  font-family: var(--Font-Header);
  font-size: 3.2rem;
  font-weight: bolder;
  color: #c47f17;
`
export const SubTitle = styled.div`
  font-family: var(--Font-Text);
  font-size: 2rem;
  color: #403937;
`
