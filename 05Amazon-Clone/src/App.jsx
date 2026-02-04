import { useEffect, useState } from "react";
import { Header } from "./Components/Headers/Header";
import { Footer } from "./Components/Footer/Footer";
import { Outlet } from "react-router";
import { DataProvider } from "./contexts/data";
import useAllProducts from "./Hooks/useAllProducts";

function App() {
  const allData = useAllProducts("limit=0");

  const [cartCount, setCartCount] = useState(
    () => JSON.parse(localStorage.getItem("cartCount")) || 0,
  );
  const [range, setRange] = useState(48000);
  const [rangeLeft, setLeftRange] = useState(1);
  const [id, setId] = useState(
    () => JSON.parse(localStorage.getItem("id")) || [],
  );
  const [idCartCount, setIdCartCount] = useState(
    () => JSON.parse(localStorage.getItem("idCartCount")) || {},
  );
  const [category, setCategory] = useState(
    () => localStorage.getItem("category") || "womens-dresses",
  );

  const [itemId, setItemId] = useState(
    () => localStorage.getItem("itemId") || "90",
  );

  // search
  const [search, setSearch] = useState("");

  // Whenever category changes, save it
  useEffect(() => {
    localStorage.setItem("cartCount", cartCount);
  }, [cartCount]);

  useEffect(() => {
    localStorage.setItem("category", category);
  }, [category]);

  useEffect(() => {
    localStorage.setItem("id", JSON.stringify(id));
  }, [id]);

  useEffect(() => {
    localStorage.setItem("idCartCount", JSON.stringify(idCartCount));
  }, [idCartCount]);

  useEffect(() => {
    localStorage.setItem("idItem", JSON.stringify(itemId));
  }, [itemId]);

  return (
    <DataProvider
      value={{
        cartCount,
        setCartCount,
        range,
        setRange,
        rangeLeft,
        setLeftRange,
        category,
        setCategory,
        id,
        setId,
        idCartCount,
        setIdCartCount,
        search,
        setSearch,
        itemId,
        setItemId,
        allData,
      }}
    >
      <Header cartCount={cartCount} search={search} setSearch={setSearch} />
      <Outlet />
      <Footer />
    </DataProvider>
  );
}

export default App;
