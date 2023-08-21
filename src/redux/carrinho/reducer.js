/* eslint-disable no-case-declarations */
import { CarrinhoActionTypes } from './action-types'

const initialState = {
  totalProduts: 0,
  totalPrice: 0,
  listCoffees: [],
}

export const carrinhoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CarrinhoActionTypes.ADDCART:
      //verificar se o produto já está no carrinho
      const produtoInCart = state.listCoffees.some(
        (produtos) => produtos.id == action.payload.listCoffees.id
      )

      if (produtoInCart) {
        return {
          ...state,
          totalProduts: action.payload.amount + state.totalProduts,
          totalPrice:
            action.payload.amount * action.payload.listCoffees.price +
            state.totalPrice,
          listCoffees: state.listaCafes.map((produtos) =>
            produtos.id == action.payload.listCoffees.id
              ? {
                  ...produtos,
                  amount: action.payload.amount + produtos.amount,
                }
              : produtos
          ),
        }
      }
      return {
        ...state,
        totalProduts: action.payload.amount + state.totalProduts,
        totalPrice:
          action.payload.amount * action.payload.listCoffees.price +
          state.totalPrice,
        listCoffees: [
          ...state.listCoffees,
          {
            ...action.payload.listCoffees,
            amount: action.payload.amount,
          },
        ],
      }

    case CarrinhoActionTypes.SUBTRACTCOFFEE:
      action.payload.amount--

      if (action.payload.amount == 0) {
        return {
          totalProduts: state.totalProduts - 1,
          totalPrice: state.totalPrice - action.payload.price,
          listCoffees: state.listCoffees.filter((p) => p.amount > 0),
        }
      }

      return {
        totalProduts: state.totalProduts - 1,
        totalPrice: state.totalPrice - action.payload.price,
        listCoffees: [...state.listCoffees],
      }

    case CarrinhoActionTypes.ADDCOFFEE:
      action.payload.amount++

      return {
        totalProduts: state.totalProduts + 1,
        totalPrice: state.totalPrice + action.payload.price,
        listCoffees: [...state.listCoffees],
      }

    case CarrinhoActionTypes.DELETECOFFEE:
      return {
        ...state,
        totalProduts: state.totalProduts - action.payload.amount,
        totalPrice:
          state.totalPrice - action.payload.price * action.payload.amount,
        listCoffees: state.listCoffees.filter((p) => p.id != action.payload.id),
      }

    case CarrinhoActionTypes.RESETCOFFEE:
      return {
        state: initialState,
      }
    default:
      return state
  }
}
