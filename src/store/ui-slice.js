import {  createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice( {
    name: 'ui',
    initialState: { cartIsVisible: false },
    reducers: { 
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },
        hide(state){
            state.cartIsVisible = false;
        },
        show(state){
            state.cartIsVisible = true;
        }
     }
} );

export const uiActions = uiSlice.actions;
export default uiSlice;