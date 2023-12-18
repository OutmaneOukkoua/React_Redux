import { createSlice } from '@reduxjs/toolkit'
 export const bankSlice = createSlice({
    initialState : 1000,
    name : 'bankSlice',
    reducers : {
        WITHDRAW : (state , action)=>{
            return(
                state = state - action.payload
                )
        },
        DEPOSITE : (state , action)=>{
            return(
                state = state + action.payload
            )
        }
    }
 })

export const {WITHDRAW , DEPOSITE} = bankSlice.actions
export default bankSlice.reducer

