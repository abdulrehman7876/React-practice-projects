import { useEffect } from "react";
import { Header } from "./Components/Headers/Header";
import { Footer } from "./Components/Footer/Footer";
import { Outlet } from "react-router";
import useAllProducts from "./Hooks/useAllProducts";
import { useDispatch, useSelector } from "react-redux";
import { setAllData } from "./features/products/products";

function App() {
  const { cartCount, category, id, idCartCount, itemId, search } = useSelector(
    (state) => state.products,
  );

  const mainData = useAllProducts("limit=0");
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(mainData);
    dispatch(setAllData(mainData));
  }, [dispatch, mainData]);

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
    <>
      <Header cartCount={cartCount} search={search} />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
