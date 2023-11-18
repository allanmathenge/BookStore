import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {

    const { id, imageURL, title } = useLoaderData()

    return (
        <div className='mt-28 px-4 lg:px-24'>
            <h2 className='text-orange-700 text-5xl pb-8 font-bold'>{title}</h2>
            <img src={imageURL} alt="" className='h-96' />
        </div>
    )
}

export default SingleBook