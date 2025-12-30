import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import { Section } from "./Components/Section/Section.jsx";
import { ProductSection } from "./Components/Section/ProductSection.jsx";
import { StrictMode } from "react";
import { CartSection } from "./Components/Section/CartSection.jsx";
import { SearchProductSection } from "./Components/Section/SearchProductSection.jsx";
import { ItemsSection } from "./Components/Section/ItemSection.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Section />} />
      <Route path="productsection" element={<ProductSection />} />
      <Route path="cartsection" element={<CartSection />} />
      <Route path="searched" element={<SearchProductSection />} />
      <Route path="item" element={<ItemsSection />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
