import { MdMenu } from "react-icons/md";

function Header() {
  return (
    <header className="bg-transparent text-white p-2 flex justify-between sm:justify-evenly items-center h-30 z-1 fixed w-full ">
      <div className="flex sm:hidden text-5xl">
        <MdMenu />
      </div>
      <div className="ml-17 sm:ml-0 flex items-center">
        <img className="w-25 bg-cover" src="Asset 1.png" alt="" />
      </div>
      <nav className="flex justify-end items-center sm:bg-[#956943] h-8 w-35 sm:w-156 ">
        <ul className="hidden sm:flex justify-evenly w-156.5">
          <li>
            <a
              href="#home"
              className="hover:border-b-white pb-1 hover:border-b-2"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#menu"
              className="hover:border-b-white pb-1 hover:border-b-2 h-50"
            >
              MENU
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:border-b-white pb-1 hover:border-b-2 h-50"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:border-b-white pb-1 hover:border-b-2 h-50"
            >
              CONTACT
            </a>
          </li>
        </ul>
        <button className="w-27 sm:w-35 h-12 rounded-3xl sm:rounded-none bg-white text-black text-md sm:h-full">
          ORDER NOW
        </button>
      </nav>
    </header>
  );
}

export default Header;
