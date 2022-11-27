import axios from "axios"





export const getOrderFromBase = async(email: string| null)=>{
    if (email){
        const newEmail = email?.split('@')
        let response
        response =  await axios.get(`https://react-electronics-store-default-rtdb.europe-west1.firebasedatabase.app/orders/${newEmail[0]}.json`)
        return response.data
    }
}