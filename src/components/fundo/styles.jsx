import { styled } from 'styled-components'
import imagem_background from '../../assets/background.svg'

export const Container = styled.div`
  /* width: 1440px; */
  height: 544px;
  background-image: url(${imagem_background});
  position: absolute;
  top: 7rem;
  z-index: -1;
`
