import { useState } from "react"
import '/src/index.css'


export const ToggleSwitch = ()=>{


  let [switchColor, setSwitch] = useState("Off");
  const color = switchColor === "Off"? "Off" : "ON";
  // console.log(color);

  const handleClick = ()=>{
  return(<>{
    setSwitch(prev => (prev === "Off" ? "ON" : "Off"))
    }
  </>
  )
  }
switchColor === "ON" ? document.body.style.backgroundColor = "white" :document.body.style.backgroundColor = "rgb(3, 1, 45)"


  return(
    <>
      <button 
        style={{ backgroundColor: switchColor === "Off"? "" : "rgba(41, 117, 41, 1)" }} className="btn-style" onClick={()=>{handleClick()}}
      >
        <div className={`divStyle ${color}`}>
          {switchColor}</div>
      </button>
    </>
  )
}

// const Change = ({swtichColor, setSwitch}) => {
//   return(
//     <>
//     </>
//   )
// }
