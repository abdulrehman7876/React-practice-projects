import { useState } from "react"
import "./App.css"

export const App = ()=>{
  const [color, setColor] = useState("")

  const handleColorChange = (evt)=>{
    setColor(evt.target.innerText.toLowerCase())
    console.log(color)
  }

  return(
    <div style={{backgroundColor: color}} className="main">
      <button onClick={handleColorChange}>Red</button>
      <button onClick={handleColorChange}>Blue</button>
      <button onClick={handleColorChange}>Green</button>
      <button onClick={handleColorChange}>Yellow</button>
      <button onClick={handleColorChange}>Black</button>
    </div>
  )
}