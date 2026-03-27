import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  cartCount: 0,
  range: [0, 100],
  rangeLeft: 0,
  category: "",
  id: "",
  idCartCount: 0,
  search: "",
  itemId: "",
  allData: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setCartCount: (state, action) => {
      state.cartCount = action.payload;
    },

    setRange: (state, action) => {
      state.range = action.payload;
    },

    setLeftRange: (state, action) => {
      state.rangeLeft = action.payload;
    },

    setCategory: (state, action) => {
      state.category = action.payload;
    },

    setId: (state, action) => {
      state.id = action.payload;
    },

    setIdCartCount: (state, action) => {
      state.idCartCount = action.payload;
    },

    setSearch: (state, action) => {
      state.search = action.payload;
    },

    setItemId: (state, action) => {
      state.itemId = action.payload;
    },

    addProduct: (state, action) => {
      state.allData.push({ id: nanoid(), ...action.payload });
    },

    removeProduct: (state, action) => {
      state.allData = state.allData.filter(product => product.id !== action.payload);
    },
  },
});

export const {
  setCartCount,
  setRange,
  setLeftRange,
  setCategory,
  setId,
  setIdCartCount,
  setSearch,
  setItemId,
  addProduct,
  removeProduct,
} = productsSlice.actions;

export default productsSlice.reducer;