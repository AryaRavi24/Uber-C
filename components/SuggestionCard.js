import React from 'react'

function SuggestionCard() {
    const cardData =[
        {
            id:1,
            title:'Ride',
            desc:'Go anywhere with Uber. Request a ride, hope in, and go.',
            image:'/Go Sedan.png'
        },
        {
            id:2,
            title:'Reserve',
            desc:'Reserve your ride in advance so you can relax on the day of your trip.',
            image:'/calendar.png'
        },
        {
            id:3,
            title:'Intercity',
            desc:'Get convenient, affordable outstation cabs anytime at your convenient.',
            image:'/uberXL.png'
        },
    ]

  return (
    <>
    {
        cardData.map((item)=>(
        <div className='w-1/3  py-8 px-4 mt-5 rounded-lg flex bg-neutral-100'>
            <div className='px-1'>
                <h1 className=' font-semibold'>{item.title}</h1>
                <p className='mt-3 text-sm'>{item.desc}</p>
            </div>
            <div className='w-27'>
                <img src={item.image} className='w-full' />

            </div>
        </div>

        ))
    }

    </>
  )
}

export default SuggestionCard