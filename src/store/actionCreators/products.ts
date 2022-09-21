import { ItemsType } from '../../types/product/ItemsType';
import {Dispatch} from 'react';
import { EProductsActions, ProductsActions } from '../../types/productsHomePage/productsHomePage';




export const AddProductsHomePage = (items:ItemsType[], key:string) => {
    return (dispatch: Dispatch<ProductsActions>)=>{
            dispatch({type : EProductsActions.ADD_PRODUCT, payment:{key:key,newProduct:items}})
    } 
}


export const DeleteProductsHomePage = ( key:string) => {
    return (dispatch: Dispatch<ProductsActions>)=>{
            dispatch({type : EProductsActions.DELETE_PRODUCT, payment:{key:key}})
    } 
}