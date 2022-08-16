export  interface ItemsType {
  
    categoryId:string;
    creditMonthlyPrice :number;
    currency: string;
    discount : number;
    hasDescription : boolean;
    hasVideoReview : boolean;
    id : string ;
    name : string;
    primaryImage : PrimaryImageTypes;
    rating : number;
    reviewCount : number;
    stock : number;
    unitPrice : number;
    unitSalePrice : number;
    url : string;

}

interface PrimaryImageTypes{
    
large : string 
medium : string ;
small : string ;
}


export interface InitialStateTypes {
    product : ItemsType |null;
    id : string |null;
}



export enum EnumProductInfoActions {
    GET_PRODUCT_INFO ="GET_PRODUCT_INFO",
    REMOVE_PRODUCT_INFO ="GET_PRODUCT_INFO_ERROR"
    
}

interface GetProductInfo {
    type :EnumProductInfoActions.GET_PRODUCT_INFO;
    payment: ItemsType;
}
interface RemoveProductInfo {
    type :EnumProductInfoActions.REMOVE_PRODUCT_INFO;
   
}

export type ProductInfoActions = | GetProductInfo | RemoveProductInfo
