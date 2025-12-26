import React from 'react'

function Footer() {
  return (
    <>
    <footer className='w-full bg-black text-white'>
      <div className='w-[80%] mx-auto p-10'>
        <div className='px-21'>
        <h1 className='text-lg font-semibold'>Uber</h1>
        <h1 className='text-lg font-semibold mt-2' >Visit Help center</h1>
      </div>
        <div className='flex justify-around w-full h-[85%] mt-8'>  
            <div>   
                <ul>
                    <h1 className='text-lg font-semibold'>Company</h1>
                    <li className='mt-2'>About Us</li>
                    <li className='mt-2'>Our offerings</li>
                    <li className='mt-2'>Newsroom</li>
                    <li className='mt-2'>Investors</li>
                    <li className='mt-2'>Blog</li>
                    <li className='mt-2'>Careers</li>
                    <li className='mt-2'>Uber One</li>
                </ul>   
            </div>

            <div>   
                <ul>
                    <h1 className='text-lg font-semibold'>Products</h1>
                    <li className='mt-2'>Ride</li>
                    <li className='mt-2'>Drive</li>
                    <li className='mt-2'>Eat</li>
                    <li className='mt-2'>Uber for Business</li>
                    <li className='mt-2'>Uber Freight</li>
                    <li className='mt-2'>Gift cards</li>
                    <li className='mt-2'>Uber Health</li>
                </ul>   
            </div>

            <div>   
                <ul>
                    <h1 className='text-lg font-semibold'>Global citizenship</h1>
                    <li className='mt-2'>Safety</li>
                    <li className='mt-2'>Sustainability</li>
                </ul>   
            </div>
            <div>   
                <ul>
                    <h1 className='text-lg font-semibold'>Travel</h1>
                    <li className='mt-2'>Reserve</li>
                    <li className='mt-2'>Airports</li>
                    <li className='mt-2'>Cities</li>
                </ul>   
            </div>
        </div>
      </div>
      

    </footer>
    
    </>
  )
}

export default Footer