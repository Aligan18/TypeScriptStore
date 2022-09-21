import { Dispatch } from "react"
import { EProducts, ESelectedProductType, SelectedProductsActions } from "../../types/selectedProducts/selectedProducts"





export const addProductSelect = (product:EProducts)=> {
    return (dispatch: Dispatch<SelectedProductsActions>)=>{

        dispatch({ type:ESelectedProductType.ADD_PRODUCT, payment:product})
    }
}
export const deleteProductSelect = (product:EProducts)=> {
    return (dispatch: Dispatch<SelectedProductsActions>)=>{

        dispatch({ type:ESelectedProductType.ADD_PRODUCT, payment:product})
    }
}