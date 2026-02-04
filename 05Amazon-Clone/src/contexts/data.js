import { createContext, useContext } from "react";

export const DataContext = createContext({
  cartCount: "",
  setCartCount: () => {},
  range: "",
  setRange: () => {},
  rangeLeft: "",
  setLeftRange: () => {},
  category: "",
  setCategory: () => {},
  id: "",
  setId: () => {},
  idCartCount: "",
  setIdCartCount: () => {},
  search: "",
  setSearch: () => {},
  itemId: "",
  setItemId: () => {},
  allData: "",
});

export const DataProvider = DataContext.Provider;

export default function useData() {
  return useContext(DataContext);
}
