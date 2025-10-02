import { RiAccountCircleFill, RiArrowRightSLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

export const Hmenu = ({ isActive, setIsActive }) => {
  const hidden = isActive ? "block" : "hidden";
  const left = isActive ? "left-0" : "-left-full";

  return (
    <>
      {/* <!-- Hamburger Menu --> */}
      <div
        onClick={() => setIsActive(false)}
        className={`h-full w-full ${hidden} bg-[rgba(0,0,0,0.8)] z-2 fixed transition-all linear duration-500`}
      ></div>
      <nav
        className={`fixed z-2 bg-white h-full min-w-[300px] w-[29%] overflow-visible ${left} transition-all duration-500 linear`}
      >
        <div className="flex h-[50px] bg-[#222f3d] px-8 py-2">
          <i className="text-3xl text-white mr-2">
            <RiAccountCircleFill />
          </i>
          <i
            onClick={() => setIsActive(false)}
            className="text-white text-2xl absolute left-[100%] ml-1 mt-1 outline p-2 rounded-sm cursor-pointer"
          >
            <RxCross1 />
          </i>
          <p className="text-xl font-bold text-white">Hello, sign in</p>
        </div>
        <div className="pb-[30px] h-[85%] w-full overflow-y-scroll flex flex-col ">
          <div className="flex h-[220px] flex-col text-sm font-semibold text-gray-700 ">
            <span className="p-[13px_20px_7px_36px] text-lg font-bold text-black w-full ">
              Digital Content & Devices
            </span>
            <div className="p-[13px_20px_13px_36px] flex w-full">
              <p className="w-full">Prime Video</p>
              <i className="text-2xl ml-8 text-gray-400">
                <RiArrowRightSLine />
              </i>
            </div>
            <div className="p-[13px_20px_13px_36px] flex w-full">
              <p className="w-full">Amazon Music</p>
              <i className="text-2xl ml-8 text-gray-400">
                <RiArrowRightSLine />
              </i>
            </div>
            <div className="p-[13px_20px_13px_36px] flex w-full">
              <p className="w-full">Kindle E-readers & Books</p>
              <i className="text-2xl ml-8 text-gray-400">
                <RiArrowRightSLine />
              </i>
            </div>
            <div className="p-[13px_20px_13px_36px] flex w-full">
              <p className="w-full">Amazon Appstore</p>
              <i className="text-2xl ml-8 text-gray-400">
                <RiArrowRightSLine />
              </i>
            </div>
          </div>
          {/* border  */}
          <div className="border-b-1 border-gray-300 w-full h-[1px] mt-8"></div>

          <div className="flex h-[220px] flex-col text-sm font-semibold text-gray-700 ">
            <span className="p-[13px_20px_7px_36px] text-lg font-bold text-black">
              Shop by Department
            </span>
            <div className="p-[13px_20px_13px_36px] flex w-full">
              <p className="w-full">Electronics</p>
              <i className="text-2xl ml-8 text-gray-400">
                <RiArrowRightSLine />
              </i>
            </div>
            <div className="p-[13px_20px_13px_36px] flex w-full">
              <p className="w-full">Computers</p>
              <i className="text-2xl ml-8 text-gray-400">
                <RiArrowRightSLine />
              </i>
            </div>
            <div className="p-[13px_20px_13px_36px] flex w-full">
              <p className="w-full">Smart Home</p>
              <i className="text-2xl ml-8 text-gray-400">
                <RiArrowRightSLine />
              </i>
            </div>
            <div className="p-[13px_20px_13px_36px] flex w-full">
              <p className="w-full">Arts & Crafts</p>
              <i className="text-2xl ml-8 text-gray-400">
                <RiArrowRightSLine />
              </i>
            </div>
          </div>

          {/* border  */}
          <div className="border-b-1 border-gray-300 w-full h-[1px] mt-8"></div>

          <div className="flex h-[220px] flex-col text-sm font-semibold text-gray-700 ">
            <span className="p-[13px_20px_7px_36px] text-lg font-bold text-black">
              Programs & Features
            </span>
            <div className="p-[13px_20px_13px_36px] flex w-full">
              <p className="w-full">Gift Cards</p>
              <i className="text-2xl ml-8 text-gray-400">
                <RiArrowRightSLine />
              </i>
            </div>
            <div className="p-[13px_20px_13px_36px] flex w-full">
              <p className="w-full">Shop By Interest</p>
              <i className="text-2xl ml-8 text-gray-400">
                <RiArrowRightSLine />
              </i>
            </div>
            <div className="p-[13px_20px_13px_36px] flex w-full">
              <p className="w-full">Amazon Live</p>
              <i className="text-2xl ml-8 text-gray-400">
                <RiArrowRightSLine />
              </i>
            </div>
            <div className="p-[13px_20px_13px_36px] flex w-full">
              <p className="w-full">International Shopping</p>
              <i className="text-2xl ml-8 text-gray-400">
                <RiArrowRightSLine />
              </i>
            </div>
          </div>

          {/* border  */}
          <div className="border-b-1 border-gray-300 w-full h-[1px] mt-8"></div>

          <div className="flex h-[220px] flex-col text-sm font-semibold text-gray-700">
            <span className="p-[13px_20px_7px_36px] text-lg font-bold text-black">
              Help & Settings
            </span>
            <div className="p-[13px_20px_13px_36px] flex w-full">
              Your Account
            </div>
            <div className="p-[13px_20px_13px_36px] flex w-full">English</div>
            <div className="p-[13px_20px_13px_36px] flex w-full">
              Customer Service
            </div>
            <div className="p-[13px_20px_13px_36px] flex w-full">Sign in</div>
          </div>
        </div>
      </nav>
    </>
  );
};
