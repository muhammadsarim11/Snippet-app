"use client"
import React, { useState } from 'react'
import prismaInstance from '../../prisma.config'

const page = () => {

  const HandleSubmit = async (FormData:any) => {
    "use server"
    FormData.preventDefault()
    const Title = FormData.get("title") as string
    const Snippet = FormData.get("snippet") as string
    console.log(Title, Snippet)

const snippet = await prismaInstance.snippet.create({
  data: {
    title: Title,
    code: Snippet
  }
})

console.log(snippet)
  }
  return (
    <div className='min-h-screen w-screen px-5 py-3'>
     <div className=''>
      <h1 className='text-center text-3xl font-bold'>Write Your Snippets!😉</h1>
      <div className='flex flex-col justify-center items-center mt-5 gap-4 p-5'>
        <form className='flex flex-col justify-center items-center mt-5 gap-4 p-5' action="" onSubmit={HandleSubmit}>
          <input 
        
          name="title"
          type="text" className='w-fit border border-gray-400 px-4 py-2 rounded'  />
        <textarea
        name="snippet"
        className=' border border-gray-400 px-4 py-2 rounded h-64 w-72' id=""></textarea>
        <button className=' cursor-pointer w-fit border bg-black text-amber-50 border-gray-400 px-4 py-2 rounded'>Create</button>
        </form>
      </div>
      <div></div>
     </div>
    </div>
  )
}

export default page

