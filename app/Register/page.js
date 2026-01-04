'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../schemas/registerSchema';


function page() {
  const {register, handleSubmit,formState:{errors}} = useForm({
    resolver:zodResolver(registerSchema)
  });

  const registerSubmit = (data) =>{
    console.log("Running");
    console.log("Register form :",data);

  }

  // const {register, handleSubmit} = useForm();

  

  return (
    <>
    
    <div className=' w-full flex'>
        
        <div className='border w-1/2 flex justify-center items-center'>
          <form className='p-18 rounded-lg w-3/4' onSubmit={handleSubmit(registerSubmit)}>
            <h1 className='text-2xl font-semibold'>Sign Up</h1>

            <input type='text' placeholder='Enter Name' {...register("name")} className=' bg-neutral-100 w-full p-3 rounded-lg mt-5  focus:outline-black'/>
            {errors.name && <p className='text-red-500 text-xs mt-1'>*{errors.name.message}</p>}
            <input type='text' placeholder='Enter Phone Number' {...register("phoneNo")} className='bg-neutral-100 w-full p-3 rounded-lg mt-5 focus:outline-black'/>
            {errors.phoneNo && <p className='text-red-500 text-xs mt-1'>*{errors.phoneNo.message}</p>}
            <input type='email' placeholder='Enter Email' {...register("email")} className='bg-neutral-100 w-full p-3 rounded-lg mt-5 focus:outline-black'/>
            {errors.email && <p className='text-red-500 text-xs mt-1'>*{errors.email.message}</p>}
            <input type='password' placeholder='Enter Password' {...register("password")} className='bg-neutral-100 w-full p-3 rounded-lg mt-5 focus:outline-black'/>
            {errors.password && <p className='text-red-500 text-xs mt-1'>*{errors.password.message}</p>}
            <input type='password' placeholder='Confirm Password' {...register("confirmPass")} className='bg-neutral-100 w-full p-3 rounded-lg mt-5 focus:outline-black'/>
            {errors.confirmPass && <p className='text-red-500 text-xs mt-1'>*{errors.confirmPass.message}</p>}

            <button className='mt-5 text-center border w-full p-3 bg-black text-white font-semibold rounded-lg'>Submit</button>
            <p className='mt-5 text-center'>Already have account?<Link href='/Login' className='px-1 text-blue-700'>Login</Link></p>
          </form> 

          {/* <form className='p-18 rounded-lg w-3/4'>
            <h1 className='text-2xl font-semibold'>Sign Up</h1>

            <input type='text' placeholder='Enter Name'  className=' bg-neutral-100 w-full p-3 rounded-lg mt-5  focus:outline-black'/>
            {/* {errors.name && <p>{errors.name.message}</p>} */}
            {/* <input type='text' placeholder='Enter Phone Number'  className='bg-neutral-100 w-full p-3 rounded-lg mt-5 focus:outline-black'/> */}
            {/* {errors.phone && <p>{errors.phone.message}</p>} */}
            {/* <input type='password' placeholder='Enter Email'  className='bg-neutral-100 w-full p-3 rounded-lg mt-5 focus:outline-black'/> */}
            {/* {errors.phone && <p>{errors.phone.message}</p>} */}
            {/* <input type='password' placeholder='Enter Password'  className='bg-neutral-100 w-full p-3 rounded-lg mt-5 focus:outline-black'/> */}
            {/* {errors.phone && <p>{errors.phone.message}</p>} */}
            {/* <input type='password' placeholder='Confirm Password'  className='bg-neutral-100 w-full p-3 rounded-lg mt-5 focus:outline-black'/> */}
            {/* {errors.phone && <p>{errors.phone.message}</p>} */}

            {/* <button className='mt-5 text-center border w-full p-3 bg-black text-white font-semibold rounded-lg'>Submit</button> */}
            {/* <p className='mt-5 text-center'>Already have account?<Link href='/Login' className='px-1 text-blue-700'>Login</Link></p> */}
          {/* </form> */} 
        </div>
        <div className='w-1/2 h-screen bg-black flex justify-center items-center'>
        <Link className='absolute right-3 top-3' href='/'>
          <Image src='/close_black.png' width={30} height={70} className='filter-white'/>
        </Link>
          <div className='w-1/2 h-1/2 border '>
            <Image src='/uber-logo.png' width={150} height={150} alt='uber logo' className='filter-white py-8' />
            <h1 className='text-white text-4xl font-semibold'>Go anywhere.</h1>
            <h1 className='text-white text-4xl mt-6 font-semibold'>Effortlessly</h1>

          </div>
        </div>
    </div>
    </>
  )
}

export default page