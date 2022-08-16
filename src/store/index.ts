
import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import { RootReducer } from "./reducers";



export const store = configureStore({reducer :RootReducer, middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk)})


