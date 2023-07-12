import {ProductsActions, IInitialState, EProductsActions} from '../../types/productsHomePage/productsHomePage'


const initialState:IInitialState ={
    products : {}
}

export const productsReducer = (state = initialState,   action:ProductsActions):IInitialState => {
        switch (action.type) {
            case EProductsActions.ADD_PRODUCT:
                return {...state , products: {[action.payment.key] : action.payment.newProduct, ...state.products }}

            case EProductsActions.DELETE_PRODUCT:
                
                return { ...state, products: Object.assign(
                    {},
                    ...Object.entries(state.products)
                       .filter(([k]) => k!== action.payment.key)
                       .map(([k, v]) => ({[k]: v})))}

            default : return state
        }
}