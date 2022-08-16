import { EnumProductInfoActions, ProductInfoActions, ItemsType } from "../../types/product/ItemsType"
import { Dispatch } from "react"




export const GetProductInfo =( product:ItemsType) : any=>{
    return (dispatch: Dispatch<ProductInfoActions>)=>{
        dispatch({
            type: EnumProductInfoActions.GET_PRODUCT_INFO,
            payment : product
          });
    }
}

export const RemoveProductInfo = ():any =>{
    return (dispatch: Dispatch<ProductInfoActions>)=>{
        dispatch({ type:EnumProductInfoActions.REMOVE_PRODUCT_INFO})
    }
}