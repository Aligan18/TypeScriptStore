import { IAddress } from "../address/address";
import { ItemsType } from "../product/ItemsType";


export interface IOrderInfo {
   address: IAddress;
   data:string;
   order : IOrder;
   status : string;
   
}

export interface IOrder {
   items:ItemsType[],totalAmount: number,quantity:{} 
}