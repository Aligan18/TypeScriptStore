import {combineReducers} from "redux"
import { productInfoReducer } from "./productInfoReducer"
import {bagItemReducer} from './bagItemReducer'
import {selectedProducts} from './selectedProducts'
import {productsReducer} from './productsReducer'

export const RootReducer = combineReducers({
    product : productInfoReducer,
    bagItems: bagItemReducer,
    selectedProducts: selectedProducts,
    produtcsHomePage: productsReducer,
})

export type RootState = ReturnType<typeof RootReducer>