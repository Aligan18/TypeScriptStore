import {ProductsActions, IInitialState, EProductsActions} from '../../types/productsHomePage/productsHomePage'


const initialState:IInitialState ={
    products : {}
}

export const productsReducer = (state = initialState,   action:ProductsActions):IInitialState => {
        switch (action.type) {
            case EProductsActions.ADD_PRODUCT:
                return {...state , products: {...state.products ,[action.payment.key] : action.payment.newProduct}}
            case EProductsActions.DELETE_PRODUCT:
                return {...state}
            default : return state
        }
}