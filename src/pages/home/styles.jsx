import { styled } from 'styled-components'

export const ContainerHome = styled.div`
  /* width: 1440px; */
  padding: 0 2rem;
  /* gap: 1rem; */
  /* display: grid; */
  /* position: absolute; */

  grid-template-areas:
    'nav nav nav'
    '. . .' '. . .' '. . .' '. . .' '. . .' '. . .'
    '. . .' '. . .' '. . .' '. . .' '. . .' '. . .'
    'title . destaque '
    'itens . destaque '
    '. . .' '. . .' '. . .' '. . .' '. . .' '. . .'
    'filtro filtro filtro'
    '. . .' '. . .' '. . .' '. . .' '. . .' '. . .'
    'card card card';

  @media screen and (min-width: 768px) {
    display: grid;
    position: absolute;
    /* width: 600px; */
    padding: 0 5rem;
    /* gap: 0.5rem; */

    grid-template-areas:
      'nav nav nav'
      '. . .' '. . .' '. . .' '. . .' '. . .' '. . .'
      '. . .' '. . .' '. . .' '. . .' '. . .' '. . .'
      'title title destaque '
      'itens itens itens '
      '. . .' '. . .' '. . .' '. . .' '. . .' '. . .'
      'filtro filtro filtro'
      '. . .' '. . .' '. . .' '. . .' '. . .' '. . .'
      'card card card';
  }

  @media screen and (min-width: 768px) {
    padding: 0 6rem;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1440px;
    padding: 0 20vw;
    grid-template-areas:
      'nav nav nav'
      '. . .' '. . .' '. . .' '. . .' '. . .' '. . .'
      '. . .' '. . .' '. . .' '. . .' '. . .' '. . .'
      'title title destaque '
      'itens . destaque '
      '. . .' '. . .' '. . .' '. . .' '. . .' '. . .'
      'filtro filtro filtro'
      '. . .' '. . .' '. . .' '. . .' '. . .' '. . .'
      'card card card';
  }
`
