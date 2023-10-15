import { createSlice } from '@reduxjs/toolkit';

export const detailSlice = createSlice({
    name: 'detail',
    initialState: [],
    reducers: {
        getProdDetails: (state, action) => {

            state[0] = action.payload;
            console.log(state);


            console.log(action.payload);

        }
    }
})

export const { getProdDetails } = detailSlice.actions;
export default detailSlice.reducer;


// const item = action.payload;
// const isExist = state.products.find(product => product.id === item.id);

// if (isExist) {
//     return { ...state, products: state.products.map(data => data.product === item.product ? data : item) };
// }
// else {
//     return { ...state, products: { ...state.products, item } };
// }
