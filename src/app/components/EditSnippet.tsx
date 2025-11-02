"use client"
import { Editor } from '@monaco-editor/react'
import React, { useState } from 'react'
import type { Snippet } from '@prisma/client'
import { SaveSnippet } from '../action/index'

interface EditSnippetProps {
  snippet: Snippet | null
}

const EditSnippet = ({ snippet }: EditSnippetProps) => {
  if (!snippet) {
    return <div>Snippet not found</div>
  }
  
  

  
  const [code, setCode] = useState(snippet.code)

  const handleChange = (value: string = "") => {
    setCode(value)
  }


  // Use the server action directly as the form action. The form will
  // send a FormData object to the server action. We include a hidden
  // input named "id" and another hidden input named "code" so the
  // server receives the needed values.
  const saveSnippet = SaveSnippet
  return (
    <div className='min-h-screen w-screen px-5 py-3'>
  <form action={saveSnippet} className='top-header flex justify-between items-center pt-3 px-2'>
        <h1 className='font-medium text-2xl '>{snippet.title}</h1>
    <input type="hidden" name="id" value={snippet.id} />
    <input type="hidden" name="code" value={code} />
    <button type='submit' className='px-3 py-2 mt-2 bg-black text-white rounded cursor-pointer '>Save Snippet</button>

    </form>

      <Editor className='rounded pt-3 px-2'
        height="400px"
        defaultLanguage="javascript"
        defaultValue={code}
        theme="vs-dark"
        onChange={handleChange}
      />
    </div>
  )
}

export default EditSnippet
