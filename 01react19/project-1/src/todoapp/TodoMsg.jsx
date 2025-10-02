import { TiDelete } from "react-icons/ti";
import { FaCheckCircle } from "react-icons/fa";


export const TodoMsg = ({addNote, setaddNote})=>{
  const deleteElement = (note)=>{
  const newArr = addNote.filter((curr)=>{
    return !(curr.note === note)
  })
  setaddNote(newArr);
  }
  const tickElement = (elm)=>{
    // const {note, date, isDone} = elm
    const newTask = addNote.map((curr)=>{
      if (curr.note === elm.note) {
        return{ ...curr, isDone: !curr.isDone};
      } else {
        return curr;
      }
    })
    setaddNote(newTask) 
    console.log(addNote)
  }
  
return(
  addNote.map((elm, ind)=>{
    return (
      elm ?<div className="elm-div" key={ind}>
        <span className={`todo ${elm.isDone ? "true" : "false"}`}>{elm.note}</span>
        <span className={`todo ${elm.isDone ? "true" : "false"}`}>{elm.date}</span>
        <button className="tick-btn" onClick={()=>(tickElement(elm))}><FaCheckCircle className="check" /></button> 
        <button className="del-btn" onClick={()=>(deleteElement(elm.note))}><TiDelete className="del" /></button> 
      </div>: null
    )
  })
)}