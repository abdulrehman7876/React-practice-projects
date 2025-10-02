import { useOutletContext } from "react-router";
import useProductId from "../../Hooks/useProductId";
import { CartCard } from "../Cards/CartCard";
import { useEffect, useState } from "react";

export const CartSection = () => {
  const { id, setId, cartCount, setCartCount, idCartCount, setIdCartCount } =
    useOutletContext();
  const idData = useProductId(id);
  // console.log(id);

  const [totalPrice, setTotalPrice] = useState(0);
  let tempPrice = 0;

  useEffect(() => {
    const keys = Object.keys(idCartCount);
    setIdCartCount({});
    keys.filter((elm) => {
      if (idCartCount[elm] !== 0) {
        return setIdCartCount((prev) => ({
          ...prev,
          [elm]: idCartCount[elm],
        }));
        // console.log("if", elm);
      }
    });
  }, [setIdCartCount]);
  idData.forEach((elm) => {
    tempPrice =
      (tempPrice * 100 + Number(elm.price) * 100 * idCartCount[elm.id]) / 100;
  });

  useEffect(() => {
    setTotalPrice(tempPrice);
  }, [tempPrice]);

  return (
    <>
      <section className="bg-gray-200 p-[14px_18px_18px] flex gap-5 w-full">
        <div className="bg-white w-[75%]">
          <div className="p-[20px]">
            <h2 className="text-3xl">Shopping Cart</h2>
            <div className="w-full flex justify-end border-b-1 border-gray-200">
              <div>
                <span className="text-sm">Price</span>
              </div>
            </div>
            <div className="grid auto-rows-auto">
              {idData ? (
                idData.map((elm) => {
                  return (
                    <CartCard
                      key={elm.id}
                      img={elm.thumbnail || ""}
                      title={elm.title}
                      description={elm.description}
                      price={elm.price}
                      rating={elm.rating}
                      elmId={elm.id}
                      id={id}
                      setId={setId}
                      cartCount={cartCount}
                      setCartCount={setCartCount}
                      idCartCount={idCartCount}
                      setIdCartCount={setIdCartCount}
                      totalPrice={totalPrice}
                      setTotalPrice={setTotalPrice}
                    />
                  );
                })
              ) : (
                <div>loading...</div>
              )}
            </div>
          </div>
        </div>
        <div className="bg-white p-[20px] text-lg h-[150px] w-[25%]">
          <div>
            <span className="font-normal">Subtotal ({cartCount} items): </span>
            <span className="font-bold">${totalPrice}</span>
            <button className="p-[5px_11px] bg-amber-300 rounded-2xl pb-2 cursor-pointer text-sm w-full">
              Proceed to checkout
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
