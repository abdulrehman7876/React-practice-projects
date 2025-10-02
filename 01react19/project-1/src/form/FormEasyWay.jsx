import { useState } from "react"
import "./form.css"

export const FormEasyWay = ()=>{
  const [userInfo, setInfo] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    PhoneNumber: "",
  });

  const handleChange = (evt)=>{
    const { name, value } = evt.target
    setInfo((prev)=>({...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (evt)=>{
    evt.preventDefault()
    console.log(userInfo);
    // console.log(userName)
    // console.log(userlastName)
    // console.log(userEmail)
    // console.log(userPassword)
    // console.log(userPhoneNumber)
  }

  return(
    <>
      <form action="">
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fil the following form</p>

          <label htmlFor="FirstName"><b>First Name</b></label>
          <input className="input"
            onChange={(evt)=>{handleChange(evt)}}
            value={userInfo.FirstName} 
            type="text"
            placeholder="First Name"
            name="FirstName"
            required
          />
          <label htmlFor="LastName"><b>Last Name</b></label>
          <input className="input"
            onChange={(evt)=>{handleChange(evt)}}
            value={userInfo.LastName}  
            type="text" 
            name="LastName"  
            placeholder="Last Name"
          />
          <label htmlFor="Email"><b>Email</b></label>
          <input className="input" 
            onChange={(evt)=>{handleChange(evt)}}
            value={userInfo.Email} 
            type="text" 
            name="Email"
            placeholder="abd@gmail.com"
          />
          <label htmlFor="Password"><b>Password</b></label>
          <input className="input"
            onChange={(evt)=>{handleChange(evt)}}
            value={userInfo.Password}  
            type="text" 
            name="Password"
            required
          />
          <label htmlFor="PhoneNumber"><b>Phone Number</b></label>
          <input className="input"
            onChange={(evt)=>{handleChange(evt)}}
            value={userInfo.PhoneNumber}  
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