export const ProfileShow = ()=>{
  return(
    <ShowProfile
      name = "Abd"
      age = {18}
      greetings = {
        <div>
          <p>Hello {name}</p>
        </div>
      }
    >
      <p>hello World</p>
    </ShowProfile>
  )
}

function ShowProfile({name, age, greetings, children}){

  // const {name, age, greetings, children} = props
  return(
    <>
      <h2>Name: {name}</h2>
      <h2>age: {age}</h2>
      <h2>{greetings}</h2>
      <h2>{children}</h2>
    </>
  )
}