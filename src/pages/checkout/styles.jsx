import { styled } from 'styled-components'

export const ContainerCheckout = styled.div`
  /* padding: 0 16rem; */
  /* width: 144rem; */
  /* display: grid; */

  /* grid-template-columns: 64rem 44.8rem; */
  gap: 1.2rem 3.2rem;

  grid-template-areas:
    'nav nav'
    '. .' '. .'
    'titlepay titlepay2'
    '. .'
    'endcard cfcardpay'
    'payment cfcardpay'
    'payment .'
    'payment .';

  @media screen and (min-width: 320px) {
    padding: 0 1.5rem;
  }

  @media screen and (min-width: 425px) {
    padding: 0 3rem;
  }

  @media screen and (min-width: 1024px) {
    /* padding: 0 5rem; */
    display: grid;
    grid-template-columns: 54rem 44.8rem;
    grid-template-areas:
      'nav nav'
      'titlepay titlepay2'
      '. .'
      'endcard cfcardpay'
      'payment cfcardpay'
      'payment .'
      'payment .';

    justify-content: center;
    margin-left: 5rem;
  }
`
