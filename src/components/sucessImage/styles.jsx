import { styled } from 'styled-components'
import imageSucess from '../../assets/imageSucess.svg'

export const Container = styled.div`
  /* width: 49.2rem; */

  height: 29.3rem;
  height: 20h;
  background-position: center;
  background-image: url(${imageSucess});
  background-size: contain;
  background-repeat: no-repeat;
  grid-area: ${(props) => props.area};

  @media screen and (min-width: 1024px) {
    width: 49rem;
    height: 29.3rem;
  }
`
