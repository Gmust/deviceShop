import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    basket: []
}


const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        setBasket(state, action) {
                state.basket = action.payload;
        }

    }

})

export const  { setBasket} = basketSlice.actions;

export default  basketSlice.reducer