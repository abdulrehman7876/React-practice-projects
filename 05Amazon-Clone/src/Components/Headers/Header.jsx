import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosSearch, IoMdArrowDropdown } from "react-icons/io";
import { GrMenu } from "react-icons/gr";
import { Hmenu } from "../H-menu/Hmenu";
import { useState } from "react";
import { Link } from "react-router";

export const Header = ({ cartCount, search, setSearch }) => {
  const [isActive, setIsActive] = useState(false);

  const handleSearch = (evt) => {
    setSearch(evt.target.value);
  };

  return (
    <>
      <Hmenu isActive={isActive} setIsActive={setIsActive} />

      <nav className="w-full bg-[#131A22] flex font-[Arial] gap-1 items-center justify-between px-1">
        {/* navbar start */}
        <Link
          to=""
          className="w-[114px] h-[60px] rounded border-[1px] border-transparent hover:border-[1px] hover:border-white p-[-50px]"
        >
          <img
            src="/amazon_logo.png"
            alt=""
            className="h-[65px] object-cover"
          />
        </Link>
        <div className="hidden md:flex w-[92px] my-[5px] mb-[0] mt-2px px-9px justify-center items-center text-white rounded border-[1px] border-transparent hover:border-[1px] hover:border-white py-[5px] cursor-pointer">
          <i className="text-lg mt-2">
            <HiOutlineLocationMarker />
          </i>
          <div>
            <p className="text-xs mb-[-3px] p-0 text-gray-300">Deliver to</p>
            <p className="text-sm m-0 p-0 font-bold">Pakistan</p>
          </div>
        </div>

        {/* Search */}
        <div className="h-[60px] w-1/2 flex items-center">
          <div className="w-full rounded-md hover:border-2 hover:border-[#ffae45] flex">
            <select
              name=""
              id=""
              className="outline-none text-[#5e5e5e] bg-[#F3F3F3]  h-[40px] w-[49px] p-[2px] text-[12px] text-center rounded-l-sm border-r-1 border-gray-300"
            >
              <option value="">All</option>
            </select>
            <input
              name="Search"
              placeholder="Search"
              className="outline-none w-full h-[40px] bg-white py-[8px] px-[6px]"
              type="text"
              onChange={(evt) => handleSearch(evt)}
              value={search}
            />
            <Link
              to="/searched"
              className="text-[#131A22] text-2xl bg-[#ffae45]  h-[40px] w-[45px] p-[2px]  text-center rounded-r-sm flex items-center justify-center"
            >
              <IoIosSearch />
            </Link>
          </div>
        </div>

        {/* language */}
        <div className="hidden md:flex items-center justify-center ml-5 mt-2 border-transparent border-[1px] hover:border-[1px] hover:border-white py-3 rounded cursor-pointer">
          <img
            className="h-5"
            src="https://flagsapi.com/US/flat/64.png"
            alt=""
          />
          <p className="text-white text-sm font-bold">EN</p>
          <span className="text-gray-400 h-sm">
            <IoMdArrowDropdown />
          </span>
        </div>
        <div className="hidden sm:flex flex-col text-white border-transparent border-[1px] hover:border-[1px] hover:border-white p-2 rounded cursor-pointer">
          <span className="text-xs">Hello, sign in</span>
          <span className="text-sm font-bold flex">
            Account & Lists
            <i>
              <IoMdArrowDropdown className="text-gray-400 h-sm mt-1" />
            </i>
          </span>
        </div>

        {/* orders */}
        <div className="hidden md:flex flex-col text-white border-transparent border-[1px] hover:border-[1px] hover:border-white p-2 rounded cursor-pointer">
          <span className="text-xs">Returns</span>
          <span className="text-sm font-bold">& Orders</span>
        </div>

        {/* cart */}
        <Link
          to="cartsection"
          className="flex h-sm items-center justify-center border-transparent border-[1px] hover:border-[1px] hover:border-white py-2 rounded cursor-pointer"
        >
          <p className="absolute text-[#ffae45] font-bold ml-[-2rem] mb-5">
            {cartCount}
          </p>
          <img className="h-7" src="/cart.png" alt="" />
          <p className="text-white text-sm font-bold mt-3 mr-3">Cart</p>
        </Link>
        {/* navbar end */}
      </nav>

      {/* navbar sprite */}
      <div className="flex items-center w-full gap-0 h-[40px] bg-[#222f3d] text-white text-sm overflow-x-auto">
        <div
          onClick={() => setIsActive((prev) => !prev)}
          className="flex ml-2 items-center justify-center border-transparent border-[1px] hover:border-[1px] hover:border-white p-2 rounded cursor-pointer"
        >
          <i className="text-xl">
            <GrMenu />
          </i>
          <p className="font-bold ml-px mb-[2px]">All</p>
        </div>
        <div className="flex gap-0 font-normal mb-[3px]">
          <Link
            href=""
            className="border-transparent border-[1px] hover:border-[1px] hover:border-white p-2 rounded cursor-pointer w-max"
          >
            Today's Deals
          </Link>
          <Link
            href=""
            className="border-transparent border-[1px] hover:border-[1px] hover:border-white p-2 rounded cursor-pointer w-max"
          >
            Prime Videos
          </Link>
          <Link
            href=""
            className="border-transparent border-[1px] hover:border-[1px] hover:border-white p-2 rounded cursor-pointer w-max"
          >
            Registry
          </Link>
          <Link
            href=""
            className="border-transparent border-[1px] hover:border-[1px] hover:border-white p-2 rounded cursor-pointer w-max"
          >
            Customer Service
          </Link>
          <Link
            href=""
            className="border-transparent border-[1px] hover:border-[1px] hover:border-white p-2 rounded cursor-pointer w-max"
          >
            Gift Cards
          </Link>
          <Link
            href=""
            className="border-transparent border-[1px] hover:border-[1px] hover:border-white p-2 rounded cursor-pointer w-max"
          >
            Sell
          </Link>
        </div>
      </div>
    </>
  );
};
