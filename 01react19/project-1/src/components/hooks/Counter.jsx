import { useState } from "react";
import styles from "/src/components/style.module.css"
export const State = ()=>{
  const [count, setCount] = useState(0);
  return(
    <>
    <div className={styles.main}>
      <h1 className={styles.heading}>{count}</h1>
      <button className={styles.btn} onClick={()=>{setCount(count + 1 )}}>Increase</button>
    </div>
    </>

  )
}