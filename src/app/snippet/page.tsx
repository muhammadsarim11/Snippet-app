
import { redirect } from 'next/navigation'
import prismaInstance from '../../../prisma.config'
import { RedirectType } from 'next/navigation'
import { Editor } from '@monaco-editor/react'

const page = () => {

  const HandleSubmit = async (FormData:FormData) => {
    "use server"

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
redirect("/")
  }
  return (
    <div className='min-h-screen w-screen px-5 py-3'>
     <div className=''>
      <h1 className='text-center text-3xl font-bold'>Write Your Snippets!😉</h1>
      <div className='flex flex-col justify-center items-center mt-5 gap-4 p-5'>
        <form className='flex flex-col justify-center items-center mt-5 gap-4 p-5' action={HandleSubmit}>
          <input 
        
          name="title"
          type="text" className='w-fit border border-gray-400 px-4 py-2 rounded'  />
 <textarea
 className='w-96 h-64 border border-gray-400 px-4 py-2 rounded'
 name="snippet" id=""></textarea>

          <button type='submit' className='px-3 py-2 bg-black text-white rounded cursor-pointer'>Save Snippet</button>  
    
     </form>
      </div>
      <div></div>
     </div>
    </div>
  )
}

export default page

