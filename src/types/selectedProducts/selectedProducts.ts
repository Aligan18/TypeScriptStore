export interface IInitialState {
    selectedProducts: string[]
}
export enum ESelectedProductType {
    ADD_PRODUCT="ADD_PRODUCT",
    DELETE_PRODUCT="DELETE_PRODUCT"
}
export enum EProducts{
    NOTEBOOKS="notebooks",
    SMART_TV="smart_tv",
    SMART_WATCHES = "smart_watches",
    SMARTPHONES = "smartphones"
}

interface AddProduct {
    type: ESelectedProductType.ADD_PRODUCT,
    payment:EProducts
}
interface DeleteProduct {
    type: ESelectedProductType.DELETE_PRODUCT,
    payment:EProducts
}

export type SelectedProductsActions = AddProduct|DeleteProduct