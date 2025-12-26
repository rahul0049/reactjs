
import React from 'react'
import {useState} from 'react'
const App = () => {
  const [a, setA] = useState(20)
  // first variable is readonly and second setA is write only

  const [username, setusername] = useState('rahul')
  //in case of an array
  const [users, setusers] = useState([10,20,30])
  const [Num, setNum] = useState(0)

  function changeNum(){
    console.log('hello')
    setA(30)
    setusername('ok')
    setusers([342,23,2])

  }

  function incease(){
    setNum(Num+1)
  }
  function decrease(){
    setNum(Num-1)
  }

  return (
    <div>
      {/* <h1>value of a is {a}</h1>
      <button onClick={function() {
        a++;
        console.log(a)
      }}></button> we cannot directly change the value . we have to use React to change it */}

        <h1>Value of a is {a}</h1>
        <h1>Value of username is {username}</h1>
        <h1>Array is {users}</h1>
        <button onClick={changeNum}>Increase by 1</button>

        <h1>{Num}</h1>
        <button onClick={incease}>Increase</button>
        <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default App

