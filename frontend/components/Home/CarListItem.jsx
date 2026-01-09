import { SourceContext } from '@/context/SourceContext';
import Image from 'next/image'
import React, { useContext } from 'react'
import { HiUser } from "react-icons/hi2";


function CarListItem({car,distance}) {
    const {Distance} = useContext(SourceContext);
  return (
    <div className=' flex justify-between items-center mt-3 rounded-lg px-2 '>
        <div className="flex items-center gap-1">
            <Image src={car.image} width={80} height={70}/>
            <div className="">
                <h2 className="font-semibold  flex gap-2 md:text-[16px]">
                    {car.name}
                    <span className="flex items-center gap-1"><HiUser /><p className="">{car.seat}</p></span>
                </h2>
                <p className="text-gray-400">{car.desc}</p>
            </div>
        </div>
        <h2 className="text-[16px] font-semibold">${(car.amount*distance).toFixed(2)}</h2>
    </div>
  )
}

export default CarListItem