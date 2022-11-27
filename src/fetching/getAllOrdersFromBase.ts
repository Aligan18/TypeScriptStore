import axios from "axios"


export const  getAllOrdersFromBase  = async(setAllOders:(items:{})=>void,setAllKeyOrders:(keys:string[])=> void) => {

    const response = await axios.get(`https://react-electronics-store-default-rtdb.europe-west1.firebasedatabase.app/orders.json`)
   
    const arrayOrders = Object.values(response.data)
    
    let allOrders = {}
    arrayOrders.map((order:any)=>{
        allOrders= {...allOrders,...order}
    })
    setAllOders(allOrders)
    setAllKeyOrders(Object.keys(allOrders))
    
}