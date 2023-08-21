import { CarrinhoActionTypes } from './action-types'

export const actionAddCart = (payload) => ({
  type: CarrinhoActionTypes.ADDCART,
  payload,
})

export const actionSubtractCoffee = (payload) => ({
  type: CarrinhoActionTypes.SUBTRACTCOFFEE,
  payload,
})

export const actionDeleteCoffee = (payload) => ({
  type: CarrinhoActionTypes.DELETECOFFEE,
  payload,
})

export const actionAddCoffee = (payload) => ({
  type: CarrinhoActionTypes.ADDCOFFEE,
  payload,
})

export const actionResetCoffee = (payload) => ({
  type: CarrinhoActionTypes.RESETCOFFEE,
  payload,
})
