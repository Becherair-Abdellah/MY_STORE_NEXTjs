'use client'
import { useEffect } from 'react'
const authToken = localStorage.getItem("authTokenDashbaord");
console.log(authToken);
if(!authToken){
  window.location.href = '/dashboard/signin';
}
// import { useRouter } from 'next/router';
export default function Home() {
  

  return (
    <>
   Dashbaord
    </>
  )
}

