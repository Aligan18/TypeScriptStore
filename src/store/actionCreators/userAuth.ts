import {Dispatch} from 'redux';
import { UserAuthAction, EnumUserAuth} from '../../types/userAuth/userAuth'

interface IAdd {
    email: string|null,
    id: string,
   
}

export const AddUser  = ({email, id }:IAdd)=>{
    return (dispatch: Dispatch<UserAuthAction>)=>{
        dispatch({ type:EnumUserAuth.ADD_USER, payload: { email, id, }})
    }
}

export const DeleteUser = ()=>{
    return (dispatch: Dispatch<UserAuthAction>)=>{
        dispatch({ type:EnumUserAuth.DELETE_USER})
    }
}