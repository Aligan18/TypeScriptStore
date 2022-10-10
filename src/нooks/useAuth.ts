import {useTypedSelector} from './useTypeSelector'



export const useAuth =()=>{
        const {email,id} = useTypedSelector(state=> state.userAuth)

        return {
            Auth: !!email,
            email,
            id, 
           
        }
}