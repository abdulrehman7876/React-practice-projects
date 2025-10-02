import { useEffect, useState } from "react";

function useAllProducts() {
  const [allData, setAllData] = useState(null);

  useEffect(() => {
    const fetchallData = async () => {
      let res = await fetch("https://dummyjson.com/products?limit=0");
      res = await res.json();
      setAllData(res);
    };
    fetchallData();
  }, []);
  return allData;
}

export default useAllProducts;
