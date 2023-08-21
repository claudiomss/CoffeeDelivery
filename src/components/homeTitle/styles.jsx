import { styled } from 'styled-components'

export const Container = styled.div`
  padding-bottom: 2rem;
  grid-area: ${(props) => props.area};

  @media screen and (min-width: 768px) {
    padding: 1rem 0 0 1rem;
  }
`

export const TextTitle = styled.div`
  font-family: var(--Font-Header);
  line-height: var(--Font-Height-1);
  font-weight: 800;
  font-size: 4.8rem;
  color: var(--Base-Title);
  margin-bottom: 1rem;

  @media screen and (min-width: 320px) {
    font-size: 2.8rem;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    text-align: start;
  }

  @media screen and (min-width: 1024px) {
    font-size: 4.8rem;
  }
`

export const TextSubtitle = styled.div`
  font-family: var(--Font-Text);
  line-height: var(--Font-Height-1);
  font-size: 2rem;
  color: var(--Base-SubTitle);

  @media screen and (min-width: 320px) {
    font-size: 1.6rem;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    text-align: start;
  }

  @media screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`
