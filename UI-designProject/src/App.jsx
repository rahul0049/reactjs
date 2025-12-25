import React from 'react'
import Section1 from './components/Section1/section1.jsx'
import Section2 from './components/Section2/section2.jsx'
const App = () => {
  const users = [
    {
      color: "bg-red-500",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      tag: "User 1"
    },
    {
      color: "bg-blue-500",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
      tag: "User 2"
    },
    {
      color: "bg-green-500",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      tag: "User 3"
    }
  ]
  return (

    <div >
      <Section1 users={users} />
      

    </div>

  )
}

export default App
