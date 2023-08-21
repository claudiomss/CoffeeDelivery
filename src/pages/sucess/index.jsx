import { ImageSucess } from '../../components/sucessImage'
import { SucessCheckoutInformation } from '../../components/sucessCheckoutInformation'
import { Navbar } from '../../components/navbar'
import { TitleSucess } from '../../components/sucessTitle'
import { Container } from './styles'

export function Sucess() {
  return (
    <>
      <Container>
        <Navbar area="nav" />
        <TitleSucess area="titlesuc" />
        <SucessCheckoutInformation area="info" />
        <ImageSucess area="destaque2" />
      </Container>
    </>
  )
}
