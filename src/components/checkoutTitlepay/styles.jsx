import { styled } from 'styled-components'

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: var(--Font-Header);
  font-size: 1.8rem;
  font-weight: bold;
  color: #403937;
  grid-area: ${(props) => props.area};

  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: center;
    padding: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    justify-content: start;
  }

  @media screen and (min-width: 1024px) {
    padding: 0;
  }
`
