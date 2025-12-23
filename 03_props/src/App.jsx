import React from 'react'
import Cards from './components/Cards.jsx'

function App() {
  return (
    <div className='parent'>
      <Cards user='Rahul' age={22} img="https://images.unsplash.com/photo-1766039132515-ea88dc3950bd?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

      <Cards user='Anurag' age={21} img="https://images.unsplash.com/photo-1765781127693-8dc9b9a91b55?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> 
      {/* or Cards(Anurag) */}
       
    </div>
  )
}

export default App
