import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import useData from "../../contexts/data";
import { useState } from "react";
import { Loader } from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  setCartCount,
  setIdCartCount,
  setIdCartCountDel,
  setIdCartCountZero,
  setIdDel,
} from "../../features/products/products";

export const CartCard = ({
  img,
  title,
  price,
  description,
  elmId,
  setTotalPrice,
}) => {
  const { idCartCount, cartCount } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const handleDecrement = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      if (cartCount > 0) {
        // setCartCount((prev) => prev - 1);
        dispatch(setCartCount(cartCount - 1));
        setTotalPrice((prev) => (prev * 100 - Number(price) * 100) / 100);
      }
      if (idCartCount[elmId] < 2) {
        // setId(
        //   id.filter((elm) => {
        //     if (elm !== elmId) {
        //       return elm;
        //     }
        //   }),
        // );
        dispatch(setIdDel(elmId));
        // setIdCartCount((prev) => ({
        //   ...prev,
        //   [elmId]: 0,
        // }));
      } else dispatch(setIdCartCountDel(elmId));
      setLoading(false);
    }, 1000); //  delay
  };

  const handleIncreament = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      dispatch(setCartCount(cartCount + 1));
      // setCartCount((prev) => prev + 1);
      dispatch(setIdCartCount(elmId));
      setLoading(false);
    }, 1000); //  delay
  };

  const handleDelete = () => {
    if (cartCount > 0) {
      dispatch(setIdDel(elmId));
      // setId(
      //   id.filter((elm) => {
      //     if (elm !== elmId) {
      //       return elm;
      //     }
      //   }),
      // );

      // setCartCount((prev) => prev - idCartCount[elmId]);
      dispatch(setCartCount(cartCount - idCartCount[elmId]));
      dispatch(setIdCartCountZero(elmId));
    }
  };

  return (
    <>
      <div className="grid grid-rows-[1.5fr_1fr_0.3fr] sm:grid-rows-[auto] sm:grid-cols-[1.5fr_4fr_0.3fr] py-5 border-b-1 border-gray-200">
        <div className="h-[200px]">
          <img className="h-full object-cover" src={img} alt="" />
        </div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="font-semibold">{description}</div>
          <div className="flex gap-2 items-center">
            {loading ? (
              <button className="flex w-26 px-2 py-0.5 pb-1 border-amber-300 border-3 rounded-2xl items-center justify-center font-bold bg-gray-300">
                <Loader />
              </button>
            ) : (
              <button className="flex w-26 px-2 py-0.5 pb-1 border-amber-300 border-3 rounded-2xl items-center justify-between font-bold">
                <span
                  onClick={handleDecrement}
                  className="text-[17px] cursor-pointer"
                >
                  <MdOutlineDeleteOutline />
                </span>
                <span className="text-sm">{idCartCount[elmId]}</span>
                <span
                  onClick={handleIncreament}
                  className="text-sm cursor-pointer"
                >
                  <FaPlus />
                </span>
              </button>
            )}

            <button
              onClick={handleDelete}
              className="text-xs text-blue-800 cursor-pointer"
            >
              Delete
            </button>
          </div>
        </div>
        <div className="text-xl font-semibold">${price}</div>
      </div>
    </>
  );
};
