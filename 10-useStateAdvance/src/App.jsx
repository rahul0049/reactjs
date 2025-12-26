import { Linkedin } from 'lucide-react'
import React from 'react'
import {useState} from 'react'
const App = () => {
  const [num, setnum] = useState({user:'rahul',age:20})
  const btnClicked=()=>{
    // setnum(num); // no re-render as no changes
    //to change object - de structuring can be done
    const newNum={... num};
    newNum.user='Rahul Saini'
    setnum(newNum)

// Batch update
//     setnum(num+1)
//     setnum(num+1)
//     setnum(num+1)
//     it should be done like 
//     setnum(prev=>(prev+1))
//   setnum(prev=>(prev+1))
// setnum(prev=>(prev+1))   
 }
  return (
    <div>
      <h1>{num.age} , {num.user}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
