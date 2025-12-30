import { useEffect, useState } from "react";

function useItemProduct(id) {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const results = await Promise.all(
          id.map(async (elm) => {
            const res = await fetch(`https://dummyjson.com/products/${elm}`);
            return res.json();
          })
        );
        setCategoryData(results);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCategoryData();
  }, [id]);
  return categoryData;
}

export default useItemProduct;
