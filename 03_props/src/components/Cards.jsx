import React from 'react'

const Cards = (props) => {
  //props is an object
  //we get props data as object
  return (
    
      <div className="card">
        <img src={props.img} />

        <h1>{props.user},{props.age}</h1>
        

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View</button>
      </div>
    
  )
}

export default Cards
