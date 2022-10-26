import { createSlice } from '@reduxjs/toolkit';

const cartProductsArr = JSON.parse(localStorage.getItem('cartProducts')) ?? [];

const initialState = {
  mobileNavVis: false,
  cartProducts: cartProductsArr,
};

const saveToLocal = item => {
  localStorage.setItem('cartProducts', JSON.stringify(item));
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    toggleNavVis: state => {
      state.mobileNavVis = !state.mobileNavVis;
    },

    incrementQuantity: (state, action) => {
      const index = state.cartProducts.findIndex(
        product => product.id === action.payload
      );

      state.cartProducts[index].quantity++;
      saveToLocal(state.cartProducts);
    },

    decrementQuantity: (state, action) => {
      const index = state.cartProducts.findIndex(
        product => product.id === action.payload
      );

      // Delete if quantity is 1.
      if (state.cartProducts[index].quantity === 1) {
        state.cartProducts.splice(index, 1);
        return;
      }

      state.cartProducts[index].quantity--;
      saveToLocal(state.cartProducts);
    },

    changeQuantity: (state, action) => {
      const index = state.cartProducts.findIndex(
        product => product.id === action.payload.id
      );

      state.cartProducts[index].quantity = action.payload.qty;
      saveToLocal(state.cartProducts);
    },

    addToCart: (state, action) => {
      // check if product already exists in cart.
      const existingProductIndex = state.cartProducts.findIndex(
        product => product.id === action.payload.data.id
      );

      // handle existing product (increment quantity).
      if (existingProductIndex > -1) {
        state.cartProducts[existingProductIndex].quantity +=
          action.payload.quantity;
        return;
      }

      state.cartProducts.unshift({
        ...action.payload.data,
        quantity: action.payload.quantity,
      });
      saveToLocal(state.cartProducts);
    },

    deleteCartItem: (state, action) => {
      const productIndex = state.cartProducts.findIndex(
        product => action.payload === product.id
      );

      if (productIndex > -1) state.cartProducts.splice(productIndex, 1);
      saveToLocal(state.cartProducts);
    },

    clearCart: state => {
      state.cartProducts = [];
      saveToLocal(state.cartProducts);
    },
  },
});

export const {
  toggleNavVis,
  incrementQuantity,
  decrementQuantity,
  changeQuantity,
  addToCart,
  deleteCartItem,
  clearCart,
} = mainSlice.actions;

export default mainSlice.reducer;
