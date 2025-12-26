import React from 'react'

const App = () => {
  const submitHandler=()=>{
    console.log('form submited')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault()
        submitHandler()
      }}>
        <input type="text" placeholder='Enter your name'/>
        
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
