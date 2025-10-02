import { Header } from "./Components/Headers/Header";
import { Footer } from "./Components/Footer/Footer";
import { Outlet } from "react-router";

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
