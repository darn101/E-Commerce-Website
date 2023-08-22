import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        getProducts: (state, action) => {
            if (state.length === 0) {
                state.push(action.payload);
            }

            // console.log(action.payload);
        },
    }


});


export const { getProducts } = productSlice.actions;
export default productSlice.reducer;



    // extraReducers: (builder) => {
    //     builder
    //         .addCase(getProd.fulfilled, (state, action) => {
    //             state = action.payload;
    //         })
    //         .addCase(getProd.pending, (state) => {
    //             state = [];
    //         })
    //         .addCase(getProd.rejected, (state) => {
    //             state = [];
    //             console.log('Error while importing cunt');
    //         })
    // }