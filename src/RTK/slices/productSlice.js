import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
export const FetchProducts = createAsyncThunk('productSlice/FetchProducts', async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
    return data;})

export const productSlice = createSlice({
    initialState : [{id : 1 , name : 'product 1'}],
    name : 'productSlice',
    reducers : {
        AddProducts : (state , action) => {
            state.push(action.payload);
        }
    },
    extraReducers : (builder) => {
        builder.addCase(FetchProducts.pending,(state , action)=>{
            // show loader here
        })

        builder.addCase(FetchProducts.rejected,(state , action)=>{
            // show when request is rejected
        })

        builder.addCase(FetchProducts.fulfilled,(state , action)=>{
            state = action.payload;
            console.log(action)
        })
    }
})

export const {AddProducts} = productSlice.actions; 
export default productSlice.reducer;