import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className=' w-full h-screen flex justify-center items-center'>
        <div className='border w-[35%] p-18 rounded-lg'>
            <h1 className='text-2xl font-semibold'>Login</h1>
            <input type='text' placeholder='Enter Phone Number or Email' className='border border-neutral-400 w-full p-2 rounded-lg mt-5'/>
            <input type='password' placeholder='Enter Email' className='border border-neutral-400 w-full p-2 rounded-lg mt-5'/>
            <button className='mt-5 text-center border w-full p-3 bg-black text-white font-semibold rounded-lg'>Login</button>
            <p className='mt-5 text-center'>Don't have an account?<Link href='/Register' className='px-1 text-blue-700'>Sign Up</Link></p>
        </div>
    </div>
  )
}

export default page