"use client"
import React, { useState } from 'react'

const page = () => {

  const [Title, setTitle] = useState("")
  const [Snippet, setSnippet] = useState("")
  const HandleSubmit = (e:React.FormEvent)=>{
    if(Title === "" || Snippet ===""){
      alert("fill the fields correctly")
      return
    }
    e.preventDefault()
    console.log(Title,Snippet)
    setTitle("")
    setSnippet("")

  }
  return (
    <div className='min-h-screen w-screen px-5 py-3'>
     <div className=''>
      <h1 className='text-center text-3xl font-bold'>Write Your Snippets!😉</h1>
      <div className='flex flex-col justify-center items-center mt-5 gap-4 p-5'>
        <form className='flex flex-col justify-center items-center mt-5 gap-4 p-5' action="" onSubmit={HandleSubmit}>
          <input 
          value={Title}
          onChange={(e)=>{
setTitle(e.target.value)
          }}
          type="text" className='w-fit border border-gray-400 px-4 py-2 rounded'  />
        <textarea 
        value={Snippet}
        onChange={(e)=>{
          setSnippet(e.target.value)
        }}
        className=' border border-gray-400 px-4 py-2 rounded h-64 w-72' name="" id=""></textarea>
        <button className=' cursor-pointer w-fit border bg-black text-amber-50 border-gray-400 px-4 py-2 rounded'>Create</button>
        </form>
      </div>
      <div></div>
     </div>
    </div>
  )
}

export default page
