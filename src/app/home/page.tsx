import React from 'react'
import prismaInstance from '../../../prisma.config'

const HomePage = async () => {

    const snippet = await prismaInstance.snippet.findMany()
    console.log(snippet)
  return (
    <div className='min-h-screen w-full bg-gray-200'>
      <div>
        <h1 className='text-center font-bold text-2xl mb-5 '>Welcome Back, User!</h1>
      </div>
      <div>
        <div className='p-5 mt-5 '>
        <h2 className='text-center font-medium text-3xl text-gray-600'>Your Snippets</h2>
            {
                snippet.map((snippet,idx) => {
                return(
                    <div className='flex flex-col justify-center min-w-auto items-center gap-2 px-2 py-4 mt-5 bg-white rounded-lg shadow-md' key={idx}>
                  
                        <h3 className='font-bold text-2xl text-gray-800'>{snippet.title}</h3>
                        <p className='text-gray-500 text-xl'>{snippet.code}</p>
                    </div>
                )

                })
            }

        </div>
      </div>
    </div>
  )
}

export default HomePage

