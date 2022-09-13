 import {ItemsType} from '../product/ItemsType'
 
 export interface InitialStateTypes {
    items : { [key: string]: ItemsType };
    totalAmount : number;
    quantity:{[key: string]: number}

}




export enum EnumBagItemActions{
    ADD_ITEM="ADD_ITEM",
    DELETE_ITEM="DELETE_ITEM",
    INCREASE_QUANTITY = "INCREASE",
    DECREASE_QUANTITY = "DECREASE" 
}


interface  IAddItem {
    type:EnumBagItemActions.ADD_ITEM,
    payment:{item:ItemsType, amount:number , id:string},
}

interface IDeleteItem {
    type:EnumBagItemActions.DELETE_ITEM,
    payment:{id:string, amount:number}
}

interface IIncrease {
    type :EnumBagItemActions.INCREASE_QUANTITY,
    payment:{id:string,amount:number }
}
interface IDecrease {
    type :EnumBagItemActions.DECREASE_QUANTITY,
    payment:{id:string,amount:number }
}

export type BagItemActions = |IAddItem|IDeleteItem|IIncrease|IDecrease