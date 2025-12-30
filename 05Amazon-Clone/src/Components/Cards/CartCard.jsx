import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

export const CartCard = ({
  img,
  title,
  price,
  description,
  elmId,
  id,
  setId,
  idCartCount,
  setIdCartCount,
  cartCount,
  setCartCount,
  setTotalPrice,
}) => {
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
            <button className="flex w-26 px-2 py-0.5 pb-1 border-amber-300 border-3 rounded-2xl items-center justify-between font-bold">
              <span
                onClick={() => {
                  if (cartCount > 0) {
                    setCartCount((prev) => prev - 1);
                    setTotalPrice(
                      (prev) => (prev * 100 - Number(price) * 100) / 100
                    );
                  }
                  if (idCartCount[elmId] < 2) {
                    setId(
                      id.filter((elm) => {
                        if (elm !== elmId) {
                          return elm;
                        }
                      })
                    );
                    setIdCartCount((prev) => ({
                      ...prev,
                      [elmId]: 0,
                    }));
                  } else
                    setIdCartCount((prev) => ({
                      ...prev,
                      [elmId]: idCartCount[elmId] - 1,
                    }));
                }}
                className="text-[17px] cursor-pointer"
              >
                <MdOutlineDeleteOutline />
              </span>
              <span className="text-sm">{idCartCount[elmId]}</span>
              <span
                onClick={() => {
                  setCartCount((prev) => prev + 1);
                  setIdCartCount((prev) => ({
                    ...prev,
                    [elmId]: idCartCount[elmId] + 1,
                  }));
                }}
                className="text-sm cursor-pointer"
              >
                <FaPlus />
              </span>
            </button>
            <button
              onClick={() => {
                setId(
                  id.filter((elm) => {
                    if (elm !== elmId) {
                      return elm;
                    }
                  })
                );
                setCartCount((prev) => prev - idCartCount[elmId]);
              }}
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
