import { useEffect, useState } from "react";

function useProductId(id) {
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
  // console.log(categoryData);
  return categoryData;
}

export default useProductId;
