import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
<div className='bg-fixed'>
    
        {/* <Image src='/uberbanner.jpg' width={900} height={400} className='w-full h-full' /> */}
        <div className='absolute bottom-40 right-30'>
            {/* <SignIn/> */}
        </div>
    
  </div>
)
}