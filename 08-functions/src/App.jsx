import React from 'react'

const App = () => {
 function btnClicked(){
  console.log('btn clicked')
 }
 const mouseEnter=()=>{
  console.log("mouse entered")
 }
 const inputChanging=(val)=>{
  console.log(val)
 }
  return (
    <div className='flex flex-col w-full'>
      <button onMouseEnter={mouseEnter} onClick={btnClicked}> Click here</button> 
      {/* function should not be called i.e. btnClicked() is not valid because it will run without clicking also */}

      <button onClick={function(){ console.log("hello guys")}}>Click inside me</button>

      <input className='bg-green-200 h-12 w-[223px] mb-14 ml-12' onChange={function(ele){
        console.log(ele.target.value)
      }} type="text" placeholder='Enter Name'/>
      {/*Other way without calling the function is  */}
        <input onChange={function(ele){
        inputChanging(ele.target.value)
      }} type="text" placeholder='Enter Name'/>
      
      {/* onWheel */}
    </div>
  )
}

export default App 
