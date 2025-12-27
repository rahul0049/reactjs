import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const [data, setData] = useState([])
 async function getData(){
    const response =await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data= await response.json()   
  }

  //using axios
  const getData2= async ()=>{
    const response =await axios.get('https://jsonplaceholder.typicode.com/todos')
    setData(response.data) // array of object
  }
  

  return (
    <div>
      <button onClick={getData2}>Get data</button>
      <div>
      {data.map((elem,idx)=>{
        return <h3>Hello {idx} {elem.username} </h3>
      })}
      </div>
    </div>
  )
}

export default App
