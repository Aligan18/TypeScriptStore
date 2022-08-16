import {combineReducers} from "redux"
import { productInfoReducer } from "./productInfoReducer"


export const RootReducer = combineReducers({
    product : productInfoReducer,
})

export type RootState = ReturnType<typeof RootReducer>