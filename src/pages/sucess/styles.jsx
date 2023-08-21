import { styled } from 'styled-components'

export const Container = styled.div`
  padding: 0 2rem;
  /* width: 144rem; */
  /* display: grid; */
  gap: 4rem 10.2rem;
  grid-template-columns: min-content min-content;
  grid-template-areas:
    'nav nav'
    '. .'
    'titlesuc titlesuc'
    'info destaque2';

  @media screen and (min-width: 1024px) {
    display: grid;
    /* padding-left: 20vw; */
    justify-content: center;
    transform: translateX(10rem);
    gap: 4rem 10.2rem;
    grid-template-columns: min-content min-content;
    grid-template-areas:
      'nav nav'
      'titlesuc titlesuc'
      'info destaque2';
  }
`
