import React from 'react'
import prismaInstance from '../../prismaClient'
import Link from 'next/link'

const Page = async () => {
  try {
    const snippets = await prismaInstance.snippet.findMany({
      orderBy: {
        id: 'desc'
      }
    })

    return (
    <div className='min-h-screen w-full bg-gray-200 px-5 py-3'>
      <div className='p-5 flex justify-between items-center'>
        <h2 className='font-medium text-2xl text-gray-900'>Home </h2>
        <Link href='/snippet' className='px-3 py-2 bg-black text-white rounded '>Create Snippet</Link>
        </div>
{
  snippets && snippets.length > 0 ? (
    snippets.map((snippet) => (
      <div key={snippet.id} className='mt-4 m-5 p-4 bg-white rounded shadow flex justify-between items-center'>
        <h3 className='font-normal text-xl text-gray-800'>{snippet.title}</h3>
        <Link href={`/snippet/${snippet.id}`} className='text-gray-500 hover:underline'>View Snippet</Link>
      </div>
    ))
  ) : (
    <div className='mt-4 m-5 p-4 bg-white rounded shadow flex flex-col gap-4'>
      <h3 className='font-normal text-xl text-gray-800'>No Snippets Found</h3>
    </div>
  )}
      </div>
    )
  } catch (error) {
    console.error('Error fetching snippets:', error)
    return (
      <div className='min-h-screen w-full bg-gray-200 px-5 py-3'>
        <div className='mt-4 m-5 p-4 bg-white rounded shadow'>
          <h3 className='font-normal text-xl text-gray-800'>Error loading snippets. Please try again later.</h3>
        </div>
      </div>
    )
  }
}

export default Page
