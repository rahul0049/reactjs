import React from 'react'

const App = () => {
  
  const user=localStorage.setItem('user','rahul')
  localStorage.getItem('user')
  localStorage.removeItem('user')

  const user1={
    username:'Rahul',
    age:21,
    city:'jaipur'
  }
  localStorage.setItem('user1',JSON.stringify(user1)) // because the value should be in string form 
  //JSON.parse to convert into it's original form
  

  
  return (
    
    <div>
      App
    </div>
  )
}

export default App
