import {combineReducers} from "redux"
import { productInfoReducer } from "./productInfoReducer"
import {bagItemReducer} from './bagItemReducer'

import {productsReducer} from './productsReducer'
import authReducer from "./authReducer"

export const RootReducer = combineReducers({
    product : productInfoReducer,
    bagItems: bagItemReducer,
    userAuth: authReducer,
    produtcsHomePage: productsReducer,
})

export type RootState = ReturnType<typeof RootReducer>