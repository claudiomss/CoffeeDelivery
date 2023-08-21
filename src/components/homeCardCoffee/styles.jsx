import { styled } from 'styled-components'

export const Container = styled.div`
  /* width: 1120px; */
  display: flex;
  justify-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem 3.2rem;
  grid-area: ${(props) => props.area};
`

export const ContainerCard = styled.div`
  width: 256px;
  height: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f3f2f2;
  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;
`

export const ImageCard = styled.div`
  width: 120px;
  height: 120px;
  transform: translateY(-20px);
  background-image: url(${(props) => props.imagem});
`
export const TypeCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  transform: translateY(-10px);
  padding-bottom: 1rem;
`
export const TypeCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--Font-Text);
  font-weight: bold;
  text-transform: uppercase;
  color: #c47f17;
  background-color: #f1e9c9;
  border-radius: 10px;
  padding: 4px 8px;
`

export const TitleCard = styled.div`
  width: 216px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--Font-Header);
  font-size: 2rem;
  font-weight: bold;
  color: #403937;
`

export const SubTitleCard = styled.div`
  width: 216px;
  height: 36px;
  text-align: center;
  font-family: var(--Font-Text);
  font-size: 1.4rem;
  color: #8d8686;
  margin: 1rem 0 3rem;
`

export const ContainerBottomCard = styled.div`
  width: 208px;
  height: 38px;
  display: flex;
  justify-content: center;
`
export const Price = styled.div`
  width: 67px;
  display: flex;
  align-items: center;
  font-family: var(--Font-Text);
  font-size: 1.4rem;
  color: #574f4d;

  span {
    font-family: var(--Font-Header);
    font-weight: bolder;
    font-size: 2.4rem;
    margin-left: 6px;
  }
`
export const ContainerCountCard = styled.div`
  width: 72px;
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: #e6e5e5;
  padding: 8px;
  border-radius: 6px;
  margin: 0 1rem 0 3rem;

  button {
    border: none;
    background-color: #e6e5e5;
    color: #8047f8;

    :hover {
      color: #4b2995;
    }
  }

  span {
    font-family: var(--Font-Text);
    font-size: 1.6rem;
  }
`

export const ContainerIconCard = styled.button`
  background-color: #4b2995;

  width: 3.8rem;
  height: 3.8rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  :hover {
    transition: 0.3s;
    background-color: #8047f8;
  }
`

export const IconCard = styled.div`
  padding: 8px 8px 5px 8px;
  border: none;
  border-radius: 6px;
`
