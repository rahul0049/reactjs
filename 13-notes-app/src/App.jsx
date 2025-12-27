import React from 'react'
import { useState } from 'react';
import {X} from 'lucide-react'
const App = () => {
  const [title, settitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])


const submitHandler=(e)=>{
    e.preventDefault();
    let copyTask=[...task];
    copyTask.push({title,details})
    setTask(copyTask)
    settitle('')
    setDetails('')
  }

  const deletNote=(idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1) // remove 1 item at specified idx
    setTask(copyTask)

  }



  return (
    <div className='h-screen lg:flex bg-black text-white'>
      
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} className='flex gap-4 lg:w-1/2 items-start flex-col  p-10 '>

        <h1 className='text-3xl font-bold'>Add Notes</h1>

        
          <input type="text" 
        placeholder='Enter Notes Heading' 
        className='px-5 font-medium w-full py-2 border-2 outline-none rounded'
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}
        />


        <textarea type="text" 
        className='px-5 h-32 w-full font-medium py-2 border-2 flex  outline-none rounded'
        placeholder='Write Details' 
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}
        

        />
        <button className='bg-white active:bg-gray-400 font-medium  text-black outline-none px-5 py-2 rounded cursor-pointer'>Add notes</button>
        
        <img className='rotate-y-180 h-52' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYOzI_N2YdpcXSko0lQi83GpXTIrlP4UQpkg&s" alt="" />
      </form>

      <div className=' lg:w-1/2 bg-gray-950 flex-wrap p-10 lg:border-l-2'>
      <h1 className='text-3xl font'>Recent notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-{90%} overflow-auto'>
          {task.map(function(elem,idx){
            return <div key={idx} className="flex justify-between flex-col items-start relative text-black h-52 w-40 bg-cover rounded-xl py-8 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-2 leading-tight font-medium text-gray-700'>{elem.details}</p>
            </div>
            <button  onClick={()=>{
              deletNote(idx)
            }} className='w-full cursor-pointer active:scale-95 bg-red-400 text-white py-1 text-xs rounded-2xl font-bold'>Delete</button>
            </div>
          })}
          
        </div>
      </div>
    </div>
  )
}

export default App
