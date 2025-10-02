import { useEffect, useState } from "react";

function useCurrencyInfo(selectcountryfrom) {
  const [data, setData] = useState({})

  useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025.8.31/v1/currencies/${selectcountryfrom.toLowerCase()}.json`)
    .then((res)=> res.json())
    .then((res)=> setData(res[selectcountryfrom.toLowerCase()]))
    .catch((err)=> console.log(err))
  },[selectcountryfrom])
  // console.log(data);
  return data;
}

export default useCurrencyInfo