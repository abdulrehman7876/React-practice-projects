import { IoIosArrowDown, IoIosStar, IoIosStarHalf } from "react-icons/io";
import { useEffect, useMemo, useRef, useState } from "react";

import { Loader } from "../Loader/Loader";
import { MainScreenLoader } from "../Loader/MainScreenLoader";
import { useDispatch, useSelector } from "react-redux";
import {
  setCartCount,
  setId,
  setIdCartCount,
} from "../../features/products/products";

export const ItemsSection = () => {
  const { cartCount, itemId, allData } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  // const data = useItemProduct(itemId);
  const data = useMemo(() => {
    if (!allData?.products) return null;

    return allData.products.find((cat) => Number(cat.id) === Number(itemId));
  }, [allData, itemId]);

  const [loading, setLoading] = useState(false);

  const handleAddToCart = () => {
    if (loading) return;

    setLoading(true);

    setTimeout(() => {
      dispatch(setId(itemId));
      dispatch(setCartCount(cartCount + 1));
      dispatch(setIdCartCount(itemId));
      setLoading(false);
    }, 1000);
  };

  const imgRef = useRef(null);
  const [img, setImg] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (data) {
      setImg(data.images?.[0]);
    }
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
  if (!data) {
    return (
      <div className="text-3xl flex flex-col justify-center items-center container mx-auto w-full p-50">
        <MainScreenLoader />
        Loading...
      </div>
    );
  } else {
    const price = data.price.toString().split(".");
    return (
      <>
        <div className="grid items-center grid-cols-1 lg:grid-cols-[2fr_3fr_1.5fr] p-5 gap-3">
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
                onClick={handleAddToCart}
                disabled={loading}
                className={`p-[5px_11px] bg-amber-300 rounded-2xl pb-2 cursor-pointer w-full place-items-center
                ${loading ? "bg-gray-300 cursor-not-allowed" : "bg-amber-300"} `}
              >
                {loading ? <Loader /> : "Add to Cart"}
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
