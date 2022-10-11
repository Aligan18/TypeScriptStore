import { ItemsType } from "../types/product/ItemsType"
import axios from 'axios'
import { IAddress } from "../types/address/address"
import { InitialStateTypes } from "../types/bag/bagItems"




export const addOrderToBase =async(email: string| null, order:InitialStateTypes ,address:IAddress)=>{
    const  data = {
        address ,
        order, 
    } 
    const shortEmail = email?.split('@')
    if(shortEmail){
    const response= await axios.post(`https://react-electronics-store-default-rtdb.europe-west1.firebasedatabase.app/orders/${shortEmail[0]}.json`,data)
    }
}