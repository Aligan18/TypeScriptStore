export interface IInitialState {
    email: string|null,
   
    id : string| null
}
export enum EnumUserAuth {
    ADD_USER= "ADD_USER",
    DELETE_USER = "DELETE_USER"
}

interface IAddUser {
    type : EnumUserAuth.ADD_USER, payload:IInitialState
}
interface IDeleteUser{
    type : EnumUserAuth.DELETE_USER
}

export type UserAuthAction = IAddUser | IDeleteUser 