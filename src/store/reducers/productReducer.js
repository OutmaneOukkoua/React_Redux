import { GET_PRODUCTS , ADD_PRODUCTS } from "../actions/productAction";


export const productsReducer = (state = [] , action) =>{
    switch(action.type){
        case GET_PRODUCTS :
            return [...action.payload];
        case ADD_PRODUCTS :
            return [...state, action.payload];
        default :
            return state;
    }
}