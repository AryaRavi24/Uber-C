
import React, { useContext, useEffect, useState } from 'react'
import InputItem from './InputItem'
import { SourceContext } from '@/context/SourceContext'
import CarListOptions from './CarListOptions';

function Search() {

    const {source, setSource, destination, setDestination} = useContext(SourceContext);
    const [Distance, setDistance] = useState(null);
    // useEffect(()=>{
    //     if(source){
    //         console.log(source);
    //     }
    //     if(destination){
    //         console.log(destination);
    //     }
    // },[source, destination])

    const calculateDistance = () =>{
        const dist = google.maps.geometry.spherical.computeDistanceBetween(
            {lat:source.lat, lng:source.lng},
            {lat:destination.lat, lng:destination.lng}
        );
        console.log(dist*0.000621374);
        setDistance(dist*0.000621374);
    }

  return (
    <div className="">
        <div className='p-2 md:p-6 border-[2px] rounded-xl'>
            <p className="text-[20px] font-bold">Get a ride</p>
            <InputItem type='source'/>
            <InputItem type='destination'/>
            <button className='p-3 bg-black text-white rounded-lg w-full mt-5' onClick={calculateDistance}>Search</button>
        </div>
        {
            Distance? <CarListOptions distance={Distance}/> :null
        }
    </div>
  )
}

export default Search