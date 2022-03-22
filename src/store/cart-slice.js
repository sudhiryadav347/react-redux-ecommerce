const { createSlice } = require("@reduxjs/toolkit");


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalAmount = state.totalAmount + newItem.totalPrice;
            state.totalQuantity = state.totalQuantity + newItem.quantity;
            // console.log('newItem', newItem);

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    image: newItem.image,
                    price: newItem.price,
                    quantity: newItem.quantity,
                    totalPrice: newItem.price * newItem.quantity,
                    name: newItem.title
                });
            }
            else {
                existingItem.quantity = existingItem.quantity + newItem.quantity;
                existingItem.totalPrice = existingItem.totalPrice + (newItem.price * newItem.quantity);
                console.log('existingItem', existingItem.quantity);
            }


        },
        reduceItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
                state.totalAmount = state.totalAmount - existingItem.price;
                state.totalQuantity = state.totalQuantity - existingItem.quantity;
            }
            else{
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
                state.totalQuantity = state.totalQuantity - 1;
                state.totalAmount = state.totalAmount - existingItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.items = state.items.filter(item => item.id !== id);
            state.totalQuantity = state.totalQuantity - existingItem.quantity;
            state.totalAmount = state.totalAmount - (existingItem.quantity * existingItem.price);
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;