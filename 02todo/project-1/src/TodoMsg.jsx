import { TiDelete } from "react-icons/ti";
import { FaCheckCircle } from "react-icons/fa";

//Handling delete button
export const TodoMsg = ({addNote, setaddNote})=>{
  const handleDeleteElement = (note)=>{
  const newArr = addNote.filter((curr)=>{
    return !(curr.note === note)
  })
  setaddNote(newArr);
  }

  //Handling tick mark button
  const handleTickElement = (elm)=>{
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
// adding or returning todo notes and buttons 
return(
  addNote.map((elm, ind)=>{
    return (
      elm ? <div className="elm-div" key={ind}>
        <span 
          className={`todo ${elm.isDone ? "true" : "false"}`}
        >
          {elm.note}
        </span>
        <span 
          className={`todo ${elm.isDone ? "true" : "false"}`}
        >
          {elm.date}
        </span>
        <button 
          className="tick-btn" onClick={()=>(handleTickElement(elm))}
        >
          <FaCheckCircle className="check" />
        </button> 
        <button 
          className="del-btn" onClick={()=>(handleDeleteElement(elm.note))}
        >
          <TiDelete className="del" />
        </button> 
      </div>: null
    )
  })
)}