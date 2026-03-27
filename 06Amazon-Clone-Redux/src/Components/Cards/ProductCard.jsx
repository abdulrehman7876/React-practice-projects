import { useEffect, useState } from "react";
import { Link } from "react-router";
import useData from "../../contexts/data";
import { Loader } from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  setCartCount,
  setId,
  setIdCartCount,
  setItemId,
} from "../../features/products/products";

export const ProductCard = ({
  img,
  description,
  price,
  reviews,
  rating,
  elmId,
}) => {
  const { idCartCount, cartCount } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  price = price.toString().split(".");

  useEffect(() => {
    if (idCartCount[elmId] === undefined) {
      dispatch(setIdCartCount(elmId));
    }
  }, [dispatch, elmId, idCartCount]);

  const handleAddToCart = () => {
    if (loading) return;

    setLoading(true);

    setTimeout(() => {
      dispatch(setId(elmId));
      dispatch(setCartCount(cartCount + 1));
      dispatch(setIdCartCount(elmId));

      setLoading(false);
    }, 1000);
  };

  return (
    <div className="h-[500px] w-[241px] bg-white flex flex-col gap-2 items-center border border-gray-100 relative rounded">
      <Link to="/item">
        <div
          onClick={() => dispatch(setItemId(elmId))}
          className="flex h-full w-full flex-col"
        >
          <div className="h-[225px] w-full bg-[#f7f7f7]">
            <img className="h-[225px] mx-auto" src={img} alt="img" />
          </div>

          <div className="p-2">
            <div className="font-semibold hover:text-amber-600 cursor-pointer line-clamp-4">
              {description}
            </div>

            <div className="text-sm flex items-center">
              <span className="text-xs font-semibold mr-1">{rating}</span>
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
      </Link>

      <div className="absolute bottom-5 left-2">
        <button
          onClick={handleAddToCart}
          disabled={loading}
          className={`w-30 h-8 rounded-2xl pb-1 cursor-pointer flex items-center justify-center
            ${loading ? "bg-gray-300 cursor-not-allowed" : "bg-amber-300"}
          `}
        >
          {loading ? <Loader /> : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};
