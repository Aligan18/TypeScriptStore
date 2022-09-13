import {combineReducers} from "redux"
import { productInfoReducer } from "./productInfoReducer"
import {bagItemReducer} from './bagItemReducer'

export const RootReducer = combineReducers({
    product : productInfoReducer,
    bagItems: bagItemReducer,
})

export type RootState = ReturnType<typeof RootReducer>