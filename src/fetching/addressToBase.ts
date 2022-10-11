import axios from "axios"
import { IAddress } from "../types/address/address"





export const addAddressToBase =async(address:IAddress, Auth:boolean, email:string| null)=>{
    const shortEmail = email?.split('@')
    if (Auth&& shortEmail) {const response = await axios.put(`https://react-electronics-store-default-rtdb.europe-west1.firebasedatabase.app/users/${shortEmail[0]}.json`, address)}

}

export const getAddressToBase =async( Auth:boolean, email:string| null)=>{
    const shortEmail = email?.split('@')
    if (Auth&& shortEmail) {
        const response = await axios.get(`https://react-electronics-store-default-rtdb.europe-west1.firebasedatabase.app/users/${shortEmail[0]}.json`)
        return response.data
    }
   
}