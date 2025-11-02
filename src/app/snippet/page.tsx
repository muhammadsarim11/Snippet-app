
import { redirect } from 'next/navigation'
import prismaInstance from '../../../prismaClient'
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
    <div className='min-h-screen w-full max-w-full px-4 sm:px-6 py-3'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-center text-2xl sm:text-3xl font-bold mb-6'>Write Your Snippets!😉</h1>
        <div className='w-full max-w-3xl mx-auto'>
          <form className='flex flex-col gap-4 w-full' action={HandleSubmit}>
            <input 
              placeholder='Enter title'
              name="title"
              type="text"  
              className='w-full max-w-md mx-auto border border-gray-400 px-4 py-2 rounded'  
            />
            <textarea
              className='w-full min-h-[200px] sm:min-h-[300px] border border-gray-400 px-4 py-2 rounded resize-y'
              name="snippet" 
              placeholder="Enter your code snippet here..."
            ></textarea>

            <button 
              type='submit' 
              className='w-full sm:w-auto px-6 py-2 bg-black text-white rounded cursor-pointer hover:bg-gray-800 transition-colors mx-auto'
            >
              Save Snippet
            </button>  
          </form>
        </div>
      </div>
    </div>
  )
}

export default page

