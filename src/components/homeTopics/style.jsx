import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  gap: 2rem 4rem;
  padding-left: 5rem;
  /* width: 567px; */
  /* height: 84px; */
  grid-area: ${(props) => props.area};

  @media screen and (min-width: 320px) {
    padding: 0 1.5rem;
    /* padding-left: 2rem; */
  }

  @media screen and (min-width: 425px) {
    padding-left: 5rem;
  }

  @media screen and (min-width: 768px) {
    margin: 0 auto;
  }

  @media screen and (min-width: 1024px) {
    /* gap: 2rem rem; */
    /* padding-left: 0; */
    display: flex;
    /* justify-content: space-between; */
    width: 63rem;
    height: 8.4rem;
  }

  @media screen and (min-width: 1200px) {
    padding-left: 0;
    display: flex;
    justify-content: space-between;
  }
`

export const Icon = styled.div`
  display: flex;
  background-color: ${(props) => props.color};
  color: white;
  padding: 8px;
  margin-right: 1.2rem;
  border-radius: 999px;
`

const Items = styled.div`
  display: flex;
  align-items: center;
  font-family: var(--Font-Text);
  font-size: 1.6rem;
`

export const Item = styled(Items)`
  width: 231px;
`

export const Item2 = styled(Items)`
  width: 294px;
`
