import React from 'react'
import SuggestionCard from '../SuggestionCard'
import ImageCard from '../ImageCard'

export default function FirstPage() {

  const posterImg = [
        {
            id:1,
            name:'firstPageImageCard1',
            image:'/cardPic1.png'
        },{
            id:2,
            name:'firstPageImageCard2',
            image:'/cardPic2.png'
        },
        {
            id:3,
            name:'firstPageImageCard3',
            image:'/cardPic3.png'
        },
        {
            id:4,
            name:'firstPageImageCard4',
            image:'/cardPic4.png'
        },
        {
            id:5,
            name:'firstPageImageCard5',
            image:'/cardPic5.png'
        },

    ]


  return (
    <>

    <div className='flex gap-3  w-full h-[65%] p-2 mt-10'>
      <div className='w-1/2  px-4'>
        <h1 className='text-5xl font-bold py-10'>Go anywhere with Uber</h1>
        <div className=' w-full h-50 flex p-2' >
          <p className=' w-1/2 py-8'>Book rides instantly, track your driver live, and reach your destination safely and comfortably</p>
          <img src='/minicar.gif' className='w-1/2' />
        </div>
      </div>
      <div className='w-1/2  flex items-center justify-center p-2'>
        <ImageCard id={posterImg[0].id} img={posterImg[0].image} />
      </div>
    </div>


    {/* Suggestions */}
    <div className='w-full mt-17 p-2'>
      <h1 className='text-2xl font-bold'>Suggestions</h1>
      <div className='flex gap-2 '>
          <SuggestionCard />
      </div>
    </div>
    {/* Login to see */}
    <div className='flex gap-3 w-full h-[65%] p-2 mt-17'>
      <div className='w-1/2  flex items-center justify-center p-2'>
        <ImageCard id={posterImg[1].id} img={posterImg[1].image} />
      </div>
      <div className='w-1/2  p-2'>
        <h1 className='text-4xl font-bold mt-17'>Login to see your account details</h1>
        <p className='text-lg mt-10'>View past trips, tailored suggestions, support resources, and more.</p>
        <div className='flex gap-8 mt-7'>
          <button className='bg-black text-white py-3 px-5 rounded-xl'>Log in to your account </button>
          <button className='border-b border-gray-400 py-1 '>Create an account</button>
        </div>
      </div>
    </div>
    {/* Drive when you want, */}
    <div className='flex gap-3 w-full h-[85%] px-10 py-17 mt-17 '>
      <div className='w-1/2  p-5'>
        <h1 className='text-4xl font-bold mt-15'>Drive when you want, make what you need</h1>
        <p className='text-lg mt-10'>Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber.</p>
        <div className='flex gap-8 mt-7'>
          <button className='bg-black text-white py-3 px-5 rounded-xl'>Get Started</button>
          <button className='border-b border-gray-400 py-1 '>Already have an account? Sign In</button>
        </div>
      </div>
      <div className='w-1/2  flex items-center justify-center p-2'>
        <ImageCard id={posterImg[2].id} img={posterImg[2].image} />
      </div>
    </div>
    {/* The uber you know */}
    <div className='flex gap-3 w-full h-[85%] py-18  px-10  '>

      <div className='w-1/2  flex items-center justify-center p-2'>
        <ImageCard id={posterImg[3].id} img={posterImg[3].image} />
      </div>
      <div className='w-1/2  p-5'>
        <h1 className='text-4xl font-bold mt-15'>The Uber you know, reimagined for business</h1>
        <p className='text-lg mt-10'>Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size.</p>
        <div className='flex gap-8 mt-7'>
          <button className='bg-black text-white py-3 px-5 rounded-xl'>Get Started</button>
          <button className='border-b border-gray-400 py-1 '>Check out our solutions</button>
        </div>
      </div>
    </div>
    {/* Make money by renting out  */}
    <div className='flex gap-3 w-full h-[85%] px-10 py-16' >
      <div className='w-1/2  p-5'>
        <h1 className='text-4xl font-bold mt-15'>Make money by renting out your car</h1>
        <p className='text-lg mt-10'>Connect with thousands of drivers and earn more per week with Uber’s free fleet management tools.</p>
        <button className='bg-black text-white py-3 px-5 rounded-xl mt-7'>Get Started</button>
      </div>
      <div className='w-1/2  flex items-center justify-center p-2'>
        <ImageCard id={posterImg[4].id} img={posterImg[4].image} />
      </div>
    </div>

  </>
  )
}

