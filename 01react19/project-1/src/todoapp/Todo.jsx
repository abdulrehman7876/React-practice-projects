import { useState } from "react"
import { TodoMsg } from "./TodoMsg";

// import "./TodoApp.css"


export const Todo = ()=>{
  const [userInput, setUserInput] = useState({
    note: "",
    date: "",
    isDone: false,
  });
  const setMsg = (evt)=>{
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


  const addMsg = ()=>{

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
  // console.log(addNote)
  localStorage.setItem("todolist", JSON.stringify(addNote))



  return(
  <>
    <div className="main" >
      <input 
        name="note" className="input" 
        type="text" placeholder="Enter Todo" 
        value={userInput.note} onChange={setMsg} 
      />
      <input 
        name="date" className="date" 
        type="date" onChange={setMsg}  
        value={userInput.date}
        />
      <button className="add-btn"  onClick={addMsg}>Add</button>
    </div>
      <TodoMsg addNote={addNote} setaddNote={setaddNote} setUserInput={setUserInput} userInput={userInput} />
  </>
  )
}
