import { IInitialState, UserAuthAction, EnumUserAuth } from "../../types/userAuth/userAuth"


const initialState :IInitialState ={
    email:null,
    id:null
}



const authReducer =(state = initialState, action :UserAuthAction):IInitialState =>{

    switch (action.type){
       case EnumUserAuth.ADD_USER:
            return {...state, email:action.payload.email, id:action.payload.id } 
        
        case EnumUserAuth.DELETE_USER:
            return {...state, email:null, id:null }
        
        default: return {...state}
        }
        

   
}

export default authReducer