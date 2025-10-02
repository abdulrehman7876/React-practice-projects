import { useState } from "react";

export const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const handleIncreament = () => {
    // if (count >= 100) return
    setCount(count + (number == 0 ? 1 : number));
  };
  const handleDereament = () => {
    // if (count <= 0) return
    setCount(count - (number == 0 ? 1 : number));
  };

  const handleNumber = (evt) => {
    console.log(typeof Number(evt.target.value));
    setNumber(Number(evt.target.value));
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>{count}</h1>
      <input onChange={handleNumber} type="number" value={number} />
      <button onClick={handleIncreament} disabled={count >= 100}>
        Increament
      </button>
      <button onClick={handleDereament} disabled={count <= 0}>
        Decreament
      </button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
