import { useEffect, useState } from "react";

function useAllProducts(lim) {
  const [allData, setAllData] = useState(null);

  useEffect(() => {
    const fetchallData = async () => {
      let res = await fetch(`https://dummyjson.com/products?${lim}`);
      res = await res.json();
      setAllData(res);
    };
    fetchallData();
  }, []);
  return allData;
}

export default useAllProducts;
