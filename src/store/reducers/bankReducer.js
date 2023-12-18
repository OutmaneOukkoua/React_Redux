import { WITHDRAW_MONY , DEPOSITE_MONY } from "../actions/bankAction";

export const bankReducer = (state = 1000 , action) =>{
    switch(action.type){
        case WITHDRAW_MONY :
            return state - action.payload;
        case DEPOSITE_MONY :
            return state + action.payload;
        default :
            return state;
    }
  }