import { useEffect } from "react";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export const ProductCard = ({
  img,
  title,
  description,
  userClass,
  price,
  reviews,
  cartCount,
  setCartCount,
  rating,
  id,
  setId,
  elmId,
  idCartCount,
  setIdCartCount,
}) => {
  price = price.toString().split(".");

  useEffect(() => {
    if (idCartCount[elmId] > 0) {
      return;
    } else {
      setIdCartCount((prev) => ({
        ...prev,
        [elmId]: 0,
      }));
    }
  }, [elmId, setIdCartCount]);

  return (
    <>
      <div className="h-[500px] w-[241px] bg-white flex flex-col gap-2 items-center border-1 border-gray-100 relative rounded">
        <div className="flex h-full w-full flex-col">
          <div className="h-[225px] w-full place-items-center bg-[#f7f7f7] object-fill">
            <img className=" h-[225px]" src={img} alt="img" />
          </div>
          <div className="p-2">
            <div className="font-semibold hover:text-amber-600 cursor-pointer">
              <div className="max-h-[100px] w-55 line-clamp-4">
                {/* {title} */}
                {description}
              </div>
              {/* <span className="text-2xl">...</span> */}
            </div>
            <div className="text-sm flex items-center">
              <span className="text-xs font-semibold mr-1">{rating}</span>
              <span className="flex text-sm text-amber-600">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarHalf />
              </span>
              <IoIosArrowDown className="text-lg text-black" />
            </div>
            <div>{reviews}</div>
            <div className="text-3xl relative">
              <span className="absolute text-sm top-1 font-semibold">$</span>
              <span className="ml-2">{price[0]}</span>
              <span className="absolute text-sm top-1 font-semibold">
                {price[1]}
              </span>
            </div>
          </div>
        </div>
        <div className=" text-black absolute bottom-5 left-2 text-sm">
          <button
            onClick={() => {
              setId((prev) => (prev.includes(elmId) ? prev : [...prev, elmId]));
              console.log(elmId);
              setCartCount(cartCount + 1);
              setIdCartCount((prev) => ({
                ...prev,
                [elmId]: idCartCount[elmId] + 1,
              }));
            }}
            className="p-[5px_11px] bg-amber-300 rounded-2xl pb-2 cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};
