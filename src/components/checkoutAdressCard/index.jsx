import { MapPinLine } from 'phosphor-react'
import {
  ContainerEndCard,
  ContainerForm,
  ContainerInput,
  ContainerTitle,
  InputBairro,
  InputCep,
  InputCidade,
  InputComplemento,
  InputNum,
  InputRua,
  InputUF,
  SubTitle,
  Title,
} from './styles'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { actionAddAdress } from '../../redux/payment/actions'
import { useState } from 'react'
import { searchZipCode } from '../../api/zipCode'

export function EndCard({ area }) {
  const [data, setData] = useState(null)
  const [zipCode, setZipCode] = useState(null)

  const { register,  handleSubmit } = useForm()
  const dispath = useDispatch()

  const onSub = (form) => {
    CepDataAsync()

    if(data == null){
      dispath(actionAddAdress(form))
    }
    else {
      dispath(actionAddAdress(data))
    }
  }

  async function CepDataAsync() {
    const zipCodeData = await searchZipCode(zipCode)
    setData(zipCodeData)
     }

  return (
    <ContainerEndCard area={area}>
      <ContainerTitle>
        <Title>
          <MapPinLine color="#C47F17" size={22} />
          Endereço de Entrega
        </Title>
        <SubTitle>Informe o endereço onde deseja receber seu pedido</SubTitle>
      </ContainerTitle>
      <ContainerForm onBlur={handleSubmit(onSub)}>
        <InputCep onChange={(e) => setZipCode(e.target.value)} placeholder="Cep" />
        {data ? (
          <InputRua value={data.road} {...register('road')} placeholder="Rua" />
        ) : (
          <InputRua {...register('number')} placeholder="Rua" />
        )}
        <ContainerInput>
          <InputNum {...register('number')} placeholder="Número" />
          <InputComplemento
            {...register('complement')}
           
            placeholder="Complemento"
          />
          {/* <span>Opcional</span> */}
        </ContainerInput>
        <ContainerInput>
          {data ? (
            <InputBairro
              value={data.neighborhood}
              {...register('neighborhood')}
              placeholder="Bairro"
            />
          ) : (
            <InputBairro {...register('neighborhood')} placeholder="Bairro" />
          )}

          {data ? (
            <InputCidade
              value={data.city}
              {...register('city')}
              placeholder="Cidade"
            />
          ) : (
            <InputCidade {...register('city')} placeholder="Cidade" />
          )}
          {data ? (
            <InputUF value={data.uf} {...register('uf')} placeholder="uf" />
          ) : (
            <InputUF {...register('uf')} placeholder="uf" />
          )}
        </ContainerInput>
      </ContainerForm>
    </ContainerEndCard>
  )
}
