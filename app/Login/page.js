import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className=' w-full flex'>
      <div className='w-1/2 h-screen bg-black flex justify-center items-center'>
          <div className='w-1/2 h-1/2 border '>
            <Image src='/uber-logo.png' width={150} height={150} alt='uber logo' className='filter-white py-8' />
            <h1 className='text-white text-4xl font-semibold'>Move Smarter</h1>
            <h1 className='text-white text-4xl mt-6 font-semibold'>Travel Faster</h1>

          </div>
        </div>
        
        <div className='border w-1/2 flex justify-center items-center'>
          <div className='p-18 rounded-lg w-3/4 '>
            <h1 className='text-2xl font-semibold'>Login</h1>
             <input type='text' placeholder='Enter Phone Number or Email' className='bg-neutral-100 w-full p-3 rounded-lg mt-5 focus:outline-black'/>
             <input type='password' placeholder='Enter Email' className=' bg-neutral-100 w-full p-3 rounded-lg mt-5 focus:outline-black'/>
             <button className='mt-5 text-center border w-full p-3 bg-black text-white font-semibold rounded-lg'>Login</button>
             <p className='mt-5 text-center'>Don't have an account?<Link href='/Register' className='px-1 text-blue-700'>Sign Up</Link></p>
          </div>
        </div>
        
    </div>
  )
}

export default page