import axios from 'axios'
import { useState } from 'react'
import {useTypedSelector} from './useTypeSelector'



export const useAuth =()=>{
    const [admin , setAdmin] = useState(false)
        const {email,id} = useTypedSelector(state=> state.userAuth)
        const shortEmail = email?.split("@")
        const isAdmin = async()=>{
            if(shortEmail){
            const response = await axios.get(`https://react-electronics-store-default-rtdb.europe-west1.firebasedatabase.app/users/${shortEmail[0]}.json`)
            
            setAdmin(response.data.admin)

            }
        }
        isAdmin()
        
        
        return {
            Auth: !!email,
            email,
            id, 
            admin ,
        }
}