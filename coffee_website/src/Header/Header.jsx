import { MdMenu } from "react-icons/md";
import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";

function Header({ isContactOpen, setIsContactOpen }) {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling down → hide
        setShowHeader(false);
      } else {
        // scrolling up → show
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div
        className={
          `h-full w-1/2 bg-[#956943] fixed sm:hidden z-7 flex flex-col p-10 pt-20 text-xl gap-8 text-white transition-all ease-in-out duration-200` +
          (isOpen ? " left-0" : " -left-full")
        }
        onClick={() => setIsOpen(false)}
      >
        <RxCross1
          className="text-4xl absolute top-10 right-5 border border-white p-1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <div
        className={`fixed h-full w-full bg-[rgba(0,0,0,0.5)] z-6 ${
          isOpen ? "block" : "hidden"
        } ${isOpen ? "block" : "hidden"}`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`fixed h-full w-full bg-[rgba(0,0,0,0.5)] z-6 ${
          isContactOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsContactOpen(false)}
      ></div>
      <div className="w-full h-full flex justify-center">
        <div
          className={
            `fixed h-1/2 w-full sm:w-xl lg:w-1/3 rounded-2xl bg-[#956943] z-6 -top-full text-white flex flex-col items-center justify-center p-10 gap-2 transition-all ease duration-400 text-xl` +
            (isContactOpen ? " top-30" : " -top-full")
          }
        >
          <RxCross1
            className="text-4xl absolute top-10 right-5 border border-white p-1 cursor-pointer"
            onClick={() => setIsContactOpen(false)}
          />
          <h1 className="font-semibold text-4xl mb-5">Contact Us</h1>
          <p>Email: info@thecafe.com</p>
          <p>Phone: +92 456-7890</p>
          <span className="flex gap-2">
            <p>Location:</p>
            <p>Near University || ETC Town</p>
          </span>
        </div>
      </div>
      <header
        className={`
        fixed top-0 w-full h-30 z-5
        bg-transparent text-white p-2
        flex justify-between sm:justify-evenly items-center
        transition-transform duration-300 ease-in-out
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
      `}
        onMouseEnter={() => setShowHeader(true)} // hover on top
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex sm:hidden text-5xl"
        >
          <MdMenu />
        </div>
        <div className="ml-17 sm:ml-0 flex items-center">
          <img className="w-25 bg-cover" src="Asset 1.png" alt="" />
        </div>

        <nav className="flex justify-end items-center sm:bg-[#956943] h-8 w-35 sm:w-140 md:w-156">
          <ul className="hidden sm:flex justify-evenly w-156.5">
            {["HOME", "MENU", "ABOUT", "CONTACT"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:border-b-white pb-1 hover:border-b-2"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsContactOpen(!isContactOpen)}
            className="w-27 sm:w-35 h-12 rounded-3xl sm:rounded-none bg-white text-black text-md sm:h-full hover:bg-black cursor-pointer hover:text-white hover:border-b-white hover:border-b-2"
          >
            ORDER NOW
          </button>
        </nav>
      </header>
    </>
  );
}

export default Header;
