import { useState } from "react"
import { TodoMsg } from "./TodoMsg";

export const Todo = ()=>{
  
  const [userInput, setUserInput] = useState({
    note: "",
    date: "",
    isDone: false,
  });

  const handleSetMsg = (evt)=>{
    const {name, value} = evt.target
    setUserInput((prev)=>({
      ...prev,
      [name]:value,
    }));
  }
  const localArr = ()=>{
    return ( 
      localStorage.getItem("todolist") ? JSON.parse(localStorage.getItem("todolist")) : []
    )
  }

  const [addNote, setaddNote] =  useState(
    localStorage.length == 0 ? []: localArr()
  )


  const handleAddMsg = ()=>{

    if (!userInput.note) return
    if (!userInput.date) return
    if (addNote.includes(userInput.note)) return
    setaddNote([
      ...addNote,
      userInput,
    ])
    setUserInput({
      note: "",
      date: "",
      isDone: false,
    })
  }
  localStorage.setItem("todolist", JSON.stringify(addNote))



  return(
  <>
    <div className="main-content">
      <div className="heading">
        <h1>TODO LIST</h1>
      </div>
      <div className="main" >
        <input 
          name="note" className="input" 
          type="text" placeholder="Enter Todo" 
          value={userInput.note} onChange={handleSetMsg} 
        />
        <input 
          name="date" className="date" 
          type="date" onChange={handleSetMsg}  
          value={userInput.date}
          placeholder="none"
          />
        <button className="add-btn"  onClick={handleAddMsg}>Add</button>
      </div>
      <div className="todo-elm">
        <TodoMsg addNote={addNote} setaddNote={setaddNote} setUserInput={setUserInput} userInput={userInput} />
      </div>
    </div>
  </>
  )
}
