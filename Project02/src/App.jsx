import Button from "./Button"
import { DogCard } from "./DogCard"
import { Person } from "./Person"

function App() {
  let title = "These are dog images"

  return (

    <>
    
    <h1>Project02</h1>
    <p style={
      {
        fontSize : "30px",
        color : "seagreen"
      }
    }>{title}</p>
    {/* props */}
    <DogCard dogName = "Dog01" image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIsmnD1wgkT3JmU0BkcHDh-Yiw35jsDcw-UVTPI_dyKA&s"/>
    <DogCard dogName = "Dog02" image = "https://i.insider.com/59e5d4a1b0c292755836e078?width=1136&format=jpeg"/>
    <DogCard dogName = "Dog03" image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgCmgCJf45eJ-VJPLiPFGaJChIahnwEjAqnhYROXOpqA&s"/>

    <hr></hr>
    <h1>Another Concept</h1>

    <Person name = "jack" age = "69"/>
    <Button text= "Click!!" onClick={()=>{console.log("Button Click");}}/>

    </>

  )
}

export default App
