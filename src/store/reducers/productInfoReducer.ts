import {InitialStateTypes,ProductInfoActions,EnumProductInfoActions} from '../../types/product/ItemsType'

const InitialState : InitialStateTypes = {
    product:null ,
    id : null
}

export const productInfoReducer =(state = InitialState , action :ProductInfoActions ):InitialStateTypes=>{

        switch (action.type) {
            case EnumProductInfoActions.GET_PRODUCT_INFO:
                return {...state , product : action.payment, id: action.payment.id};


            case EnumProductInfoActions.REMOVE_PRODUCT_INFO :
                return {...state , product:null, id:null}
               
            default:
                return {...state};
        }

}