export async function searchZipCode(request) {
  try {
    const zipCodeResponse = await fetch(
      `https://viacep.com.br/ws/${request}/json/`
    )
    const zipCodeResponseJson = await zipCodeResponse.json()
    return {
      city: zipCodeResponseJson.localidade,
      neighborhood: zipCodeResponseJson.bairro,
      road: zipCodeResponseJson.logradouro,
      uf: zipCodeResponseJson.uf,
    }
  } catch (error) {
    console.log('Error ao checar o cep')
    return null
  }
}
