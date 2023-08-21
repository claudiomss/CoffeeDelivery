import { ContainerHome } from './styles'
import { Navbar } from '../../components/navbar/index.jsx'
import { Fundo } from '../../components/fundo/index.jsx'
import { HomeTitle } from '../../components/homeTitle/index.jsx'
import { Topics } from '../../components/homeTopics/index.jsx'
import { ImageHome } from '../../components/homeImage/index.jsx'
import { Filter } from '../../components/homeFilter/index.jsx'
import { CardCoffee } from '../../components/homeCardCoffee/index.jsx'

export function Home() {
  return (
    <>
      <Fundo />
      <ContainerHome>
        <Navbar area="nav" />
        <HomeTitle area="title" />
        <ImageHome area="destaque" />
        <Topics area="itens" />
        <Filter area="filtro" />
        <CardCoffee area="card" />
      </ContainerHome>
    </>
  )
}
