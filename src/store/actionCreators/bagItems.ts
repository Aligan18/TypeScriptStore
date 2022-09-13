import { BagItemActions, EnumBagItemActions } from "../../types/bag/bagItems"
import { Dispatch } from "react"
import { ItemsType } from "../../types/product/ItemsType"


export const addBagItem = (item:ItemsType) =>{
    return (dispatch: Dispatch<BagItemActions>)=>{
        dispatch({ type:EnumBagItemActions.ADD_ITEM ,payment:{item, amount:item.unitPrice, id:item.id}})
    }
}

export const deleteBagItem = (item:ItemsType) =>{
    return (dispatch: Dispatch<BagItemActions>)=>{
        dispatch({ type:EnumBagItemActions.DELETE_ITEM ,payment:{ amount:item.unitPrice, id:item.id}})
    }
    
}

export const increaseItem = (item:ItemsType) =>{
    return (dispatch: Dispatch<BagItemActions>)=>{
        dispatch({ type:EnumBagItemActions.INCREASE_QUANTITY, payment:{id:item.id , amount:item.unitPrice}})
    }
}

export const decreaseItem = (item:ItemsType) =>{
    return (dispatch: Dispatch<BagItemActions>)=>{
        dispatch({ type:EnumBagItemActions.DECREASE_QUANTITY, payment:{id:item.id, amount:item.unitPrice}})
    }
}