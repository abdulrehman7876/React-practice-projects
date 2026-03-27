import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allData: "",
  cartCount: JSON.parse(localStorage.getItem("cartCount")) || 0,
  range: 48000,
  rangeLeft: 1,
  category: localStorage.getItem("category") || "womens-dresses",
  id: JSON.parse(localStorage.getItem("id")) || [],
  idCartCount: JSON.parse(localStorage.getItem("idCartCount")) || {},
  search: "",
  itemId: JSON.parse(localStorage.getItem("idItem")) || "90",
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setAllData: (state, action) => {
      state.allData = action.payload;
    },
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
      state.id.push(action.payload);
    },

    setIdDel: (state, action) => {
      state.id = state.id.filter((elm) => {
        if (elm !== action.payload) {
          return elm;
        }
      });
    },

    setIdCartCountDel: (state, action) => {
      const idCartCountDel = {
        [action.payload]: state.idCartCount[action.payload] - 1,
      };
      state.idCartCount = { ...state.idCartCount, ...idCartCountDel };
    },

    setIdCartCount: (state, action) => {
      let idCartCountObj;
      if (state.idCartCount[action.payload] === undefined) {
        idCartCountObj = { [action.payload]: -1 };
      } else {
        idCartCountObj = {
          [action.payload]: state.idCartCount[action.payload] + 1,
        };
      }

      state.idCartCount = { ...state.idCartCount, ...idCartCountObj };
    },

    setIdCartCountEmpty: (state) => {
      state.idCartCount = Object.fromEntries(
        Object.entries(state.idCartCount).filter(([_, value]) => value !== 0),
      );
    },
    setIdCartCountZero: (state, action) => {
      state.idCartCount = { ...state.idCartCount, [action.payload]: 0 };
    },

    setSearch: (state, action) => {
      state.search = action.payload;
    },

    setItemId: (state, action) => {
      state.itemId = action.payload;
    },
  },
});

export const {
  setAllData,
  setCartCount,
  setRange,
  setLeftRange,
  setCategory,
  setId,
  setIdCartCount,
  setSearch,
  setItemId,
  setIdCartCountEmpty,
  setIdDel,
  setIdCartCountDel,
  setIdCartCountZero,
} = productsSlice.actions;
export default productsSlice.reducer;
