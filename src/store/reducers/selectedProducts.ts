import { IInitialState } from "../../types/selectedProducts/selectedProducts";
import { SelectedProductsActions } from "../../types/selectedProducts/selectedProducts";
import { ESelectedProductType } from "../../types/selectedProducts/selectedProducts";

 
const initialState :IInitialState ={
    selectedProducts : []
}





export const selectedProducts = (state =initialState , action :SelectedProductsActions):IInitialState => { 
    switch (action.type) {
        
        case ESelectedProductType.ADD_PRODUCT:

            const arrayAdd = [...state.selectedProducts];    
            const indexAdd = arrayAdd.indexOf(action.payment); 
            if (indexAdd === -1) { arrayAdd.push(action.payment); } 
            return {...state ,selectedProducts: [...arrayAdd]}

        case ESelectedProductType.DELETE_PRODUCT:

            const array = [...state.selectedProducts];    
            const index = array.indexOf(action.payment); 
            if (index > -1) { array.splice(index, 1); } 
            return {...state, selectedProducts: [...array]}
             
        default:
           return {...state};
    }
}