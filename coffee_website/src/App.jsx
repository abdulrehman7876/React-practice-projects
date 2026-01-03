import { useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Aboutus from "./Sections/Aboutus";
import Home from "./Sections/Home";
import Menu from "./Sections/Menu";

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <Header
        isContactOpen={isContactOpen}
        setIsContactOpen={setIsContactOpen}
      />
      <Home />
      <Menu isContactOpen={isContactOpen} setIsContactOpen={setIsContactOpen} />
      <Aboutus />
      <Footer />
    </>
  );
}

export default App;
