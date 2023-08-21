import { styled } from 'styled-components'

export const Container = styled.div`
  /* width: calc(-2 * 16rem + 1440px); */
  grid-area: ${(props) => props.area};

  @media screen and (min-width: 320px) {
    padding: 3rem 0;
    text-align: center;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 0 3rem 2rem;
    text-align: start;
  }
`

export const Title = styled.div`
  font-family: var(--Font-Header);
  font-size: 3.2rem;
  font-weight: bolder;
  color: #403937;

  @media screen and (min-width: 320px) {
    font-size: 2.8rem;
  }
`
