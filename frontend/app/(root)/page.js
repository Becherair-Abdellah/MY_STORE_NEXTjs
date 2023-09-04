'use client'
import Image from 'next/image'
import { useEffect } from 'react'
export default function Home() {
  return (
    <>
    <Image
        src="/signups.png" // The path to your image in the public directory
        alt="My Image"
        width={100}          // The desired width of the image
        height={1000} 
        objectFit='cover'        // The desired height of the image
      />
    Get Started Work Uisng Next Js
    </>
  )
}
