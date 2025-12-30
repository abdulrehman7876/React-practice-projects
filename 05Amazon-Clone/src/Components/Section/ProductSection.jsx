import { Link, useOutletContext } from "react-router";
import { ProductCard } from "../Cards/ProductCard";
import useProductData from "../../Hooks/useProductData";
import { useEffect, useState } from "react";
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";

export const ProductSection = () => {
  const {
    cartCount,
    setCartCount,
    range,
    setRange,
    rangeLeft,
    setLeftRange,
    category,
    id,
    setId,
    idCartCount,
    setIdCartCount,
    setItemId,
  } = useOutletContext();
  const data = useProductData(category);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [tempRange, setTempRange] = useState(range);
  const [tempLeftRange, setTempLeftRange] = useState(rangeLeft);

  const applyRange = () => {
    setRange(tempRange);
    setLeftRange(tempLeftRange);
  };

  return (
    <>
      <section className="w-full grid sm:grid-cols-[1fr_3.9fr] p-2">
        <div className="text-black text-sm font-bold px-2 sm:flex flex-col gap-3 hidden">
          {/* range  */}
          <div>
            <h3>Price</h3>
            <div>
              ${tempLeftRange} - ${tempRange == 48000 ? "48000+" : tempRange}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <input
              onChange={(e) =>
                setTempRange(
                  Math.max(Number(e.target.value), tempLeftRange + 100)
                )
              }
              min="48"
              max="48000"
              className="w-40 h-[4px] absolute pointer-events-none
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:h-3
              [&::-webkit-slider-thumb]:w-3
              [&::-webkit-slider-thumb]:outline-8
              [&::-webkit-slider-thumb]:z-3
              [&::-webkit-slider-thumb]:pointer-events-auto
              [&::-webkit-slider-thumb]:outline-sky-700
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-white"
              type="range"
              value={tempRange}
              style={{
                appearance: "none",
                zIndex: 0,
                background:
                  "linear-gradient(to right, rgb(187, 191, 191) 0%, rgb(187, 191, 191) 0%, rgb(33, 98, 161) 0%, rgb(33, 98, 161) 100%, rgb(187, 191, 191) 100%, rgb(187, 191, 191) 100%)",
              }}
            />
            <input
              onChange={(e) =>
                setTempLeftRange(
                  Math.min(Number(e.target.value), tempRange - 100)
                )
              }
              aria-valuemin={tempLeftRange}
              min="0"
              max="48000"
              className="w-40 h-[4px] absolute pointer-events-none
              [&::-webkit-slider-thumb]:appearance-none 
              [&::-webkit-slider-thumb]:h-3
              [&::-webkit-slider-thumb]:z-2
              [&::-webkit-slider-thumb]:pointer-events-auto
              [&::-webkit-slider-thumb]:outline-8
              [&::-webkit-slider-thumb]:outline-sky-700
              [&::-webkit-slider-thumb]:w-3
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-white"
              type="range"
              value={rangeLeft}
              style={{
                appearance: "none",
                zIndex: 0,
              }}
            />
            <button
              onClick={applyRange}
              className="p-[4px_12px] pb-2 border-gray-500 border-1 rounded-3xl ml-45 font-semibold cursor-pointer"
            >
              Go
            </button>
          </div>
          <div className="font-semibold flex flex-col">
            <span className=" hover:text-amber-500 cursor-pointer w-max">
              Up to $100
            </span>
            <span className=" hover:text-amber-500 cursor-pointer w-max">
              $100 to $150
            </span>
            <span className=" hover:text-amber-500 cursor-pointer w-max">
              $150 to $200
            </span>
            <span className=" hover:text-amber-500 cursor-pointer w-max">
              $200 & above
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-bold">Deals & Discounts</span>
            <span className="font-normal  hover:text-amber-500 cursor-pointer w-max">
              All Discounts
            </span>
            <span className="font-normal  hover:text-amber-500 cursor-pointer w-max">
              Today's Deals
            </span>
          </div>

          <div>
            <span className="font-bold">Customer Reviews</span>
            <span className="flex text-2xl text-amber-600">
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarOutline />
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-bold">Department</span>
            <span className="font-normal  hover:text-amber-500 cursor-pointer w-max">
              Computers & Accessories
            </span>
            <span className="font-normal  hover:text-amber-500 cursor-pointer w-max">
              PC Games & Accessories
            </span>
          </div>
        </div>
        <div>
          <div className="p-1">
            <h1 className="text-black text-xl font-bold">Results</h1>
            <span className="text-gray-800 text-sm ">
              Check each product page for other buying options. Price and other
              details may vary based on product size and color.
            </span>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(241px,241px))] auto-rows-[500px] justify-center gap-[7px]">
            {data ? (
              data.products.map((elm) => {
                if (
                  Number(elm.price) >= rangeLeft &&
                  Number(elm.price) <= range
                ) {
                  return (
                    <ProductCard
                      key={elm.id}
                      img={elm.thumbnail || ""}
                      title={elm.title}
                      description={elm.description}
                      price={elm.price}
                      rating={elm.rating}
                      cartCount={cartCount}
                      setCartCount={setCartCount}
                      elmId={elm.id}
                      id={id}
                      setId={setId}
                      idCartCount={idCartCount}
                      setIdCartCount={setIdCartCount}
                      setItemId={setItemId}
                    />
                  );
                }
              })
            ) : (
              <div className="text-3xl">Loading...</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
