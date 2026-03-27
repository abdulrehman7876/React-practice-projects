import { useEffect, useState } from "react";

function useItemProduct(id) {
  const [categoryData, setCategoryData] = useState(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const res1 = await res.json();
        setCategoryData(res1);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCategoryData();
  }, [id]);
  return categoryData;
}

export default useItemProduct;
