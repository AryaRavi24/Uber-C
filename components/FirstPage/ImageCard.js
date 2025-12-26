import React from 'react'
import Image from 'next/image';


function ImageCard({img , id}) {
  return (
    <>
    <div className='w-full rounded-3xl'>
        <img id={id} src={img} className='w-full rounded-3xl'/>
    </div>
    </>
  )
}

export default ImageCard