'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../schemas/loginSchema';
function page() {

  const {register, handleSubmit,formState:{errors}} = useForm({
    resolver:zodResolver(loginSchema)
  });

  const loginSubmit =(data) =>{
    console.log("Submitted successfully");
    console.log("Login Data:", data);
  }

  return (
    <div className=' w-full flex'>
      <div className='w-1/2 h-screen bg-black flex justify-center items-center'>
          <div className='w-1/2 h-1/2 border '>
            <Image src='/uber-logo.png' width={150} height={150} alt='uber logo' className='filter-white py-8' />
            <h1 className='text-white text-4xl font-semibold'>Move Smarter</h1>
            <h1 className='text-white text-4xl mt-6 font-semibold'>Travel Faster</h1>

          </div>
        </div>
        <div>
          
        </div>
        <div className='w-1/2  relative'>
        <Link className='absolute right-3 top-3' href='/'>
          <Image src='/close_black.png' width={30} height={70}/>
        </Link>
          <form className='p-18 rounded-lg w-3/4 mx-auto mt-38' onSubmit={handleSubmit(loginSubmit)}>
            <h1 className='text-2xl font-semibold'>Login</h1>
             <input type='text' placeholder='Enter Email' {...register("email")} className='bg-neutral-100 w-full p-3 rounded-lg mt-5 focus:outline-black'/>
              {errors.email && <p className='text-red-500 text-xs mt-1'>*{errors.email.message}</p>}
             <input type='password' placeholder='Enter Password' {...register("password")} className=' bg-neutral-100 w-full p-3 rounded-lg mt-5 focus:outline-black'/>
              {errors.password && <p className='text-red-500 text-xs mt-1'>*{errors.password.message}</p>}
             <button className='mt-5 text-center border w-full p-3 bg-black text-white font-semibold rounded-lg'>Login</button>
             <p className='mt-5 text-center'>Don't have an account?<Link href='/Register' className='px-1 text-blue-700'>Sign Up</Link></p>
          </form>
        </div>
        
    </div>
  )
}

export default page