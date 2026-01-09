import { CarListData } from '@/utils/CarListData' 
import React, { useState } from 'react'
import CarListItem from './CarListItem'

function CarListOptions({distance}) {

    const [activeIndex, setActiveIndex] = useState();
    const [selectedCar, setSelectedCar] = useState([]);

  return (
    <>
    <div className='mt-5 mb-16 p-5 md:p-4 rounded-xl overflow-auto h-[300px] w-full'>
        <h2 className="text-[18px] font-bold">Recommended </h2>
        {
            CarListData.map((item, index)=>(
                <div className={`cursor-pointer p-2 rounded-md ${activeIndex== index ? 'bg-slate-200' : null}`} onClick={()=> {setActiveIndex(index);
                    setSelectedCar(item);
                }}>
                    <CarListItem car={item} distance={distance}/>
                </div>
            ))
        }
    </div>
        {selectedCar?.name? (
        <div className="flex justify-between fixed bottom-2 bg-white p-3 shadow-xl w-[89%] md:w-[33%] border-[1px] items-center rounded-lg">
            <h2 className="">Make Payment For</h2>
            <button className="p-3 bg-black text-white rounded-lg text-center">Request {selectedCar.name}</button>
        </div>
        ) : null
        }
    
    </>
  )
}

export default CarListOptions