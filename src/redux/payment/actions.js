import { PaymentActionTypes } from './action-types'

export const actionAddAdress = (payload) => ({
  type: PaymentActionTypes.ADDADRESS,
  payload,
})

export const actionAddMethodPay = (payload) => ({
  type: PaymentActionTypes.ADDMETHODPAY,
  payload,
})
