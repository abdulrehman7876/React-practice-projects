// const user = [
//   {name: "Alice", age: 25},
//   {name: "charlie", age: 15},
//   {name: "Goku", age: 18},
//   {name: "Vegeta", age: 20},

import { useState } from "react"

// ];
export const DerivedState = ()=>{
  const [user, setUser] = useState([
    {name: "Alice", age: 25},
    {name: "charlie", age: 15},
    {name: "Goku", age: 18},
    {name: "Vegeta", age: 20},
  ])

  const incrementAllAges = () => {
  setUser((prevUsers) =>
    prevUsers.map((user) => ({
      ...user,
      age: user.age + 1,
    }))
  );
};

  return(
  <>
    <Display user={user} />
  <button onClick={()=>{incrementAllAges()}}>Click Me</button>
  </>
  )
}


const Display = ({user})=>{
  return(
    user.map(({name, age}, ind)=>{
      return (
        <h1 key={ind}>Name: {name} <br />Age:{age}</h1>
      )
    })
)
}




// const incrementAllAges = () => {
//   setUsers((prevUsers) =>{
//       prevUsers.map((user) => {
//       ...user,
//       age: user.age + 1;
//     })
//   }
// };

