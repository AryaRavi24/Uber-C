"use client"
import { SourceContext } from '@/context/SourceContext';
import Image from 'next/image'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

function InputItem({type}) {

    const [value, setValue] = useState(null);
    const [placeholder, setPlaceholder] = useState('');
    const {source, setSource, destination, setDestination} = useContext(SourceContext);

    useEffect(()=>{
        type=== 'source'? setPlaceholder('Pickup location') : setPlaceholder('Dropoff location')
    },[]);

    const getLatAndLong = (place, type)=>{
        const placeId = place?.value?.place_id;
        const service = new google.maps.places.PlacesService(document.createElement('div'))
        service.getDetails({placeId}, (place,status)=>{
            if(status === 'OK' && place.geometry && place.geometry.location){
                console.log(place.geometry.location.lat())
                if(type === 'source'){
                    setSource({
                        lat:place?.geometry?.location.lat(),
                        lng:place?.geometry?.location.lng(),
                        name:place?.formatted_address,
                        label:place?.name,
                    }
                )
                }else{
                    setDestination({
                        lat:place?.geometry?.location.lat(),
                        lng:place?.geometry?.location.lng(),
                        name:place?.formatted_address,
                        label:place?.name,
                    })
                }
            }else{
                console.error('Failed to get location details', status);
            }
        })
    }

  return (
    <div>
        <div className="bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4"  >
            <Image src={type === 'source'?'/source.png' : '/destination.png'} width={20} height={15} />
            {/* <input type="text" name="" id="" placeholder={type==='source'?'Pickup location' : 'Dropoff location'} className='bg-transparent w-full outline-none' /> */}
            <GooglePlacesAutocomplete
            // apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        selectProps={{
          value,
          onChange:(place) =>{getLatAndLong(place, type);
            setValue(place)},
          placeholder:placeholder,
          isClearable:true,
          className:'w-full',
          components:{
            DropdownIndicator:false,
          },
          styles:{
            control:(provided) =>({
                ...provided,
                backgroundColor:'#00ffff00',
                border:'none',
                outline:'none',
            })
          }
        }}
      />
        </div>    
    </div>
  )
}

export default InputItem