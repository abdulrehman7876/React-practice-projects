import { useState } from "react"
import "./form.css"

export const Form = ()=>{
  const [userName, setName] = useState("");
  const [userlastName, setlastName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [userPhoneNumber, setPhonerNumber] = useState("");

  const handleSubmit = (evt)=>{
    evt.preventDefault()
    
    console.log(userName)
    console.log(userlastName)
    console.log(userEmail)
    console.log(userPassword)
    console.log(userPhoneNumber)
  }

  return(
    <>
      <form action="">
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fil the following form</p>

          <label htmlFor="FirstName"><b>First Name</b></label>
          <input
            onChange={(evt)=>{setName(evt.target.value)}}
            value={userName} 
            type="text"
            placeholder="First Name"
            name="FirstName"
            required
          />
          <label htmlFor="LastName"><b>Last Name</b></label>
          <input
            onChange={(evt)=>{setlastName(evt.target.value)}}
            value={userlastName}  
            type="text" 
            name="LastName"  
            placeholder="Last Name"
          />
          <label htmlFor="Email"><b>Email</b></label>
          <input 
            onChange={(evt)=>{setEmail(evt.target.value)}}
            value={userEmail} 
            type="text" 
            name="Email"
            placeholder="abd@gmail.com"
          />
          <label htmlFor="Password"><b>Password</b></label>
          <input
            onChange={(evt)=>{setPassword(evt.target.value)}}
            value={userPassword}  
            type="text" 
            name="Password"
            required
          />
          <label htmlFor="PhoneNumber"><b>Phone Number</b></label>
          <input
            onChange={(evt)=>{setPhonerNumber(evt.target.value)}}
            value={userPhoneNumber}  
            type="text"
            name="PhoneNumber"
            placeholder="0300000000"
            required
          />
          <button onClick={handleSubmit} type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}