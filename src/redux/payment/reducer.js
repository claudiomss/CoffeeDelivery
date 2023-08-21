/* eslint-disable no-case-declarations */

import { PaymentActionTypes } from './action-types'

const initialState = {
  zipCode: null,
  road: null,
  number: null,
  complement: 'Nenhum',
  neighborhood: null,
  city: null,
  uf: null,
  methodPay: 'Dinheiro',
}

export const paymentReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case PaymentActionTypes.ADDADRESS:
      return {
        zipCode: action.payload.zipCode,
        road: action.payload.road,
        number: action.payload.number,
        complement: action.payload.complement,
        neighborhood: action.payload.neighborhood,
        city: action.payload.city,
        uf: action.payload.uf,
      }

    case PaymentActionTypes.ADDMETHODPAY:
      return {
        ...state,
        methodPay: action.payload,
      }

    default:
      return state
  }
}
