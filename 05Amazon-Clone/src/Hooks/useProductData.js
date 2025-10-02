import { useEffect, useState } from "react";

function useProductData(category) {
  const [data, setData] = useState(null);

  const fetchProductData = async () => {
    try {
      const res = await fetch(
        `https://dummyjson.com/products/category/${category}`
      );
      const res2 = await res.json();
      setData(res2);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);
  // console.log(data);

  return data;
}

export default useProductData;
