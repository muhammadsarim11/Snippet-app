import React from 'react'
import prismaInstance from '../../../../prismaClient'
import Link from 'next/link'
import { DeleteSnippet } from '@/app/action'


const page = async ({ params,
}: {
    params: Promise<{ id: string }>
}) => {

    const { id } = await params


    console.log(id)

    const numericId = Number(id)
    if (Number.isNaN(numericId)) {
        throw new Error('Invalid snippet id')
    }

    const snippet = await prismaInstance.snippet.findUnique({
        where: { id: numericId },
    })


    const handleDelete = DeleteSnippet.bind(null, numericId)
    // After deletion, redirect to home or another appropriate page


    return (
        <div className='min-h-screen w-full bg-gray-200 px-5 py-3'>
            <div>
                {snippet ? (
                    <div key={snippet.id} className='mt-4 p-5 px-6 bg-white rounded shadow flex flex-col gap-4'>
                        <h3 className='font-medium text-xl text-gray-800'>{snippet.title}</h3>
                        <pre className='bg-gray-200 p-4 rounded overflow-x-auto'><code>{snippet.code}</code></pre>
                        <div className='flex gap-2'>
                            <Link href={`/snippet/${snippet.id}/edit`}>

                                <button className='bg-black text-white px-4 py-2 rounded hover:bg-gray-600 w-fit'>
                                    Edit
                                </button>

                            </Link>
                            <form action={handleDelete}>
                                <button
                                    type='submit'
                                    className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-fit'>
                                    Delete
                                </button>
                            </form>
                        </div>

                    </div>
                ) : (
                    <div className='mt-4 p-4 bg-white rounded shadow flex flex-col gap-4'>
                        <h3 className='font-normal  text-xl text-gray-800'>Snippet not found</h3>
                    </div>
                )}
            </div>

        </div>
    )
}

export default page
