import { ItemsType } from "../../types/product/ItemsType";
import {InitialStateTypes, BagItemActions, EnumBagItemActions} from "../../types/bag/bagItems"

const InitialState :InitialStateTypes = {
    items :{},
    totalAmount:0,
    quantity:{},
}



export const bagItemReducer =(state= InitialState, action:BagItemActions):InitialStateTypes =>{
    switch (action.type) {
        case EnumBagItemActions.ADD_ITEM:
            const changeQuantity ={...state}
            if (!changeQuantity.quantity[action.payment.id]){
                changeQuantity.quantity[action.payment.id] =0
            }
            return {...state, items : {...state.items ,[action.payment.id]:action.payment.item } , 
                    totalAmount: state.totalAmount + action.payment.amount ,
                     quantity:{...changeQuantity.quantity, [action.payment.id]: state.quantity[action.payment.id]+1,}
                }
            ;
        case EnumBagItemActions.DELETE_ITEM: 
            const changeTotalAmount = {...state}
            
            const changedState = {...state}
            delete changedState.items[action.payment.id]
            delete changedState.quantity[action.payment.id]
            return {...state ,
                
                totalAmount: changeTotalAmount.totalAmount-(action.payment.amount * changeTotalAmount.quantity[action.payment.id]),
                items: {...changedState.items} , }
    

        case EnumBagItemActions.INCREASE_QUANTITY:
                   return {...state, quantity:{...state.quantity, [action.payment.id]: state.quantity[action.payment.id] + 1 },
                            totalAmount: state.totalAmount + action.payment.amount ,
                }
                   
        case EnumBagItemActions.DECREASE_QUANTITY:
                    if (state.quantity[action.payment.id]===1){
                        return {...state}
                    }
                   return {...state, quantity:{...state.quantity, [action.payment.id]: state.quantity[action.payment.id] - 1 },
                            totalAmount: state.totalAmount - action.payment.amount ,
                }
        default:
            return {...state};
    }
}