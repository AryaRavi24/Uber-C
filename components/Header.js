import Image from 'next/image'
import React from 'react'

function Header() {
    const headerMenu =[
        {
            id:1,
            name:'Ride',
            icon:'/taxi.png'
        },
        {
            id:2,
            name:'Package',
            icon:'/box.png'
        },
    ]

  return (
    <div className='px-25 py-3 border-b-[4px] border-gray-200 flex items-center justify-between bg-black'> 
        <Image src='/uber-logo.png' width={70} height={70} alt='uber logo' className='filter-white'/>
        <div className="w-[90%] p-2 flex items-center justify-between ">
            <div className="flex gap-18 ">
                {
                    headerMenu.map((item)=>(
                        <div key={item.id} className="flex gap-2">
                            <Image src={item.icon} height={17} width={17} alt={item.name} className='filter-white' />
                            <h1 className="text-white font-semibold">{item.name}</h1>
                        </div>
                    ))
                }
            </div>
            <div className="flex gap-18 text-white font-semibold">
                <h1 className="">Help</h1>
                <h1 className="">Login</h1>
                <h1 className="">Sign up</h1>
            </div>
        </div>
    </div>
  )
}

export default Header