import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
        quantity: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            const itemIndex = state.products.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.products[itemIndex].quantity += 1;
                toast.info(`Increased ${action.payload.title.shortTitle} quantity`, {
                    position: 'bottom-left'
                });
            }
            else {
                const tempProduct = { ...action.payload, quantity: 1 };
                state.products.push(tempProduct);
                toast.success(`Added ${tempProduct.title.shortTitle}`, {
                    position: 'bottom-left'
                });

            }

            localStorage.setItem("cartItems", JSON.stringify(state.products));


        },
        removeProduct: (state, action) => {
            let nextItems = state.products.filter((prod) => prod.id !== action.payload.id);
            console.log(nextItems);
            state.products = nextItems;
            toast.error(`Removed ${action.payload.title.shortTitle} from the cart`, {
                position: 'bottom-left'
            })

            localStorage.setItem("cartItems", JSON.stringify(nextItems));
        },
        DecreaseCart: (state, action) => {
            let index = state.products.findIndex((prod) => prod.id === action.payload.id);

            if (state.products[index].quantity > 1) {
                state.products[index].quantity -= 1;
                toast.error(`Decreased ${action.payload.title.shortTitle} quantity`, {
                    position: 'bottom-left'
                });
                localStorage.setItem("cartItems", JSON.stringify(state.products));

            }
            else if (state.products[index].quantity === 1) {
                let nextItems = state.products.filter((prod) => prod.id !== action.payload.id);
                toast.error(`Removed ${action.payload.title.shortTitle} from the cart`, {
                    position: 'bottom-left'
                });
                state.products = nextItems;
                localStorage.setItem("cartItems", JSON.stringify(nextItems));

            }
        },
        IncreaseCart: (state, action) => {
            let index = state.products.findIndex((prod) => prod.id === action.payload.id);

            state.products[index].quantity += 1;
            toast.success(`Increased ${action.payload.title.shortTitle} quantity`, {
                position: 'bottom-left'
            });
            localStorage.setItem("cartItems", JSON.stringify(state.products));
        },
        ClearCartItems: (state, action) => {
            state.products = [];
            localStorage.setItem("cartItems", JSON.stringify(state.products));
        }
    }
})

export const { addProduct, removeProduct, DecreaseCart, IncreaseCart, ClearCartItems } = cartSlice.actions;
export default cartSlice.reducer;

