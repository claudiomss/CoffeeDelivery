import { styled } from 'styled-components'
import imageHome from '../../assets/imageHome.svg'

export const Container = styled.div`
  width: 47.6rem;
  height: 36rem;

  background-image: url(${imageHome});
  background-size: contain;
  background-repeat: no-repeat;
  grid-area: ${(props) => props.area};

  @media screen and (min-width: 320px) {
    margin: 0 auto;
    width: 27.6rem;
    height: 23rem;
  }

  @media screen and (min-width: 1024px) {
    width: 47.6rem;
    height: 36rem;
  }
`
