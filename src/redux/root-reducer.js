import { combineReducers } from 'redux'
import { carrinhoReducer } from './carrinho/reducer.js'
import { paymentReducer } from './payment/reducer.js'


export const rootReducer = combineReducers({ carrinhoReducer, paymentReducer })
