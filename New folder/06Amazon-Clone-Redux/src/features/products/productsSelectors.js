import { createSelector } from '@reduxjs/toolkit';

export const selectProductsState = (state) => state.products;

export const selectCartCount = createSelector(
  [selectProductsState],
  (productsState) => productsState.cartCount
);

export const selectRange = createSelector(
  [selectProductsState],
  (productsState) => productsState.range
);

export const selectLeftRange = createSelector(
  [selectProductsState],
  (productsState) => productsState.rangeLeft
);

export const selectCategory = createSelector(
  [selectProductsState],
  (productsState) => productsState.category
);

export const selectId = createSelector(
  [selectProductsState],
  (productsState) => productsState.id
);

export const selectIdCartCount = createSelector(
  [selectProductsState],
  (productsState) => productsState.idCartCount
);

export const selectSearch = createSelector(
  [selectProductsState],
  (productsState) => productsState.search
);

export const selectItemId = createSelector(
  [selectProductsState],
  (productsState) => productsState.itemId
);

export const selectAllData = createSelector(
  [selectProductsState],
  (productsState) => productsState.allData
);