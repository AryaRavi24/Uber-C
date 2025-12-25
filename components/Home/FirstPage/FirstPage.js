import React from 'react'
import SuggestionCard from './SuggestionCard'

function FirstPage() {
  return (
    <>
    <div className='flex gap-3 w-full h-[65%] border p-2 mt-10'>
      <div className='w-1/2  p-2'>
        <h1 className='text-6xl font-bold py-15'>Go anywhere with Uber</h1>
      </div>
      <div className='w-1/2  flex items-center justify-center p-2'>
          <div className='w-full rounded-3xl'>
            <img src='/cardPic1.png' className='w-full rounded-3xl'/>
          </div>
      </div>
    </div>
    <div className='w-full border mt-5 p-2'>
      <h1 className='text-2xl font-bold'>Suggestions</h1>
      <div className='flex gap-2'>
          <SuggestionCard />
      </div>
    </div>
  </>
  )
}

export default FirstPage