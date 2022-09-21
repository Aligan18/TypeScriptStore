import {ItemsType} from "../product/ItemsType"

export interface IInitialState {
    products : {[key: string]: ItemsType[]}
}


export enum EProductsActions {
    ADD_PRODUCT="ADD_PRODUCT",
    DELETE_PRODUCT="DELETE_PRODUCT"
}

interface addProducts {
    type: EProductsActions.ADD_PRODUCT, payment: {key: string , newProduct: ItemsType[]}
}
interface deleteProducts {
    type: EProductsActions.DELETE_PRODUCT, payment: {key: string}
}

export type ProductsActions = addProducts|deleteProducts