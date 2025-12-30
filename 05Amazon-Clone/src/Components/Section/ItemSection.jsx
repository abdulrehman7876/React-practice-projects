import { useOutletContext } from "react-router";
import { IoIosArrowDown, IoIosStar, IoIosStarHalf } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import useItemProduct from "../../Hooks/useItemProduct";

export const ItemsSection = () => {
  const {
    cartCount,
    setCartCount,
    setId,
    idCartCount,
    setIdCartCount,
    itemId,
  } = useOutletContext();

  const data = useItemProduct(itemId);
  const imgRef = useRef(null);
  const [img, setImg] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (data) setImg(data.images[0]);
  }, [data]);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    imgRef.current.style.transformOrigin = `${x}% ${y}%`;
    imgRef.current.style.transform = "scale(2)";
  };

  const handleMouseLeave = () => {
    imgRef.current.style.transformOrigin = "center";
    imgRef.current.style.transform = "scale(1)";
  };
  if (!data) return <div>Loading</div>;
  else {
    const price = data.price.toString().split(".");
    return (
      <>
        <div className="grid items-center grid-cols-1 sm:grid-cols-[2fr_3fr_1.5fr] p-5 gap-3">
          <div className="flex">
            <div className="flex flex-col gap-2">
              {data.images.map((elm, ind) => {
                return (
                  <div
                    key={ind}
                    className="h-[50px] w-[50px] border-1 border-gray-300 rounded"
                  >
                    <img
                      onMouseEnter={(evt) => {
                        setImg(evt.target.getAttribute("src"));
                      }}
                      src={elm}
                      alt=""
                      className="h-full object-cover"
                    />
                  </div>
                );
              })}
            </div>
            <div
              className="relative w-96 h-96 overflow-hidden rounded-2xl cursor-zoom-in"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img
                ref={imgRef}
                className="h-[300px] object-cover transition-transform duration-300 ease-in-out hover:scale-125"
                src={img}
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="text-2xl">{data.description}</div>
            <div className="flex items-center">
              <span className="text-sm font-semibold">{data.rating}</span>
              <span className="flex text-lg text-amber-600">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarHalf />
              </span>
              <span>
                <IoIosArrowDown className="text-lg text-black" />
              </span>
            </div>
            <div className="w-200px border-b-1 border-gray-300 text-xs mt-2 pb-2">
              <b>400+ bought</b> in past month
            </div>
            <div className="text-3xl relative">
              <span className="absolute text-sm top-1 font-semibold">$</span>
              <span className="ml-2">{price[0]}</span>
              <span className="absolute text-sm top-1 font-semibold">
                {price[1]}
              </span>
            </div>
            <div className="grid gap-1 mt-2">
              <div className="grid grid-cols-[100px_100px] text-[15px]">
                <span className="text-black font-semibold">Brand</span>
                <span>{data.brand || "Unknown"}</span>
              </div>
              <div className="grid grid-cols-[100px_100px] text-[15px]">
                <span className="text-black font-semibold">Weight</span>
                <span>{data.weight || "Unknown"}</span>
              </div>
              <div className="grid grid-cols-[100px_200px] text-[15px] ">
                <span className="text-black font-semibold">
                  Product Dimensions
                </span>
                <span>
                  {data.dimensions.depth}"L x {data.dimensions.width}"W x
                  {data.dimensions.height}"H
                </span>
              </div>
            </div>
          </div>

          <div className="border-1 border-gray-300 p-4 rounded flex flex-col gap-2">
            <div className="text-3xl relative">
              <span className="absolute text-sm top-1 font-semibold">$</span>
              <span className="ml-2">{price[0]}</span>
              <span className="absolute text-sm top-1 font-semibold">
                {price[1]}
              </span>
            </div>

            <div className="flex flex-col">
              <span>{data.shippingInformation}</span>
              <span>{data.warrantyInformation}</span>
              <span className="text-green-600 font-semibold text-lg">
                {data.availabilityStatus}
              </span>
            </div>

            <div className=" text-black text-sm">
              <button
                onClick={() => {
                  setId((prev) =>
                    prev.includes(itemId) ? prev : [...prev, itemId]
                  );
                  setCartCount(cartCount + 1);
                  setIdCartCount((prev) => ({
                    ...prev,
                    [itemId]: idCartCount[itemId] + 1,
                  }));
                }}
                className="p-[5px_11px] bg-amber-300 rounded-2xl pb-2 cursor-pointer w-full"
              >
                Add to Cart
              </button>
            </div>
            <div className=" text-black text-sm">
              <button className="p-[5px_11px] bg-amber-500 rounded-2xl pb-2 cursor-pointer w-full">
                Buy Now
              </button>
            </div>

            <div className="grid gap-1">
              <div className="grid grid-cols-[100px_100px] text-xs">
                <span className="text-gray-700">Ships from</span>
                <span>Amazon</span>
              </div>
              <div className="grid grid-cols-[100px_100px] text-xs">
                <span className="text-gray-700">Sold by</span>
                <span>{data.brand || "Unknown"}</span>
              </div>
              <div className="grid grid-cols-[100px_100px] text-xs">
                <span className="text-gray-700">Returns</span>
                <span>{data.returnPolicy || "Unknown"}</span>
              </div>
              <div className="grid grid-cols-[100px_100px] text-xs">
                <span className="text-gray-700">Packaging</span>
                <span>Ships in product Packaging</span>
              </div>
            </div>
          </div>
        </div>
        ;
      </>
    );
  }
};
