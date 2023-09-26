'use client'
import { useEffect } from 'react'
// import { useRouter } from 'next/router';
export default function Home() {
  useEffect(() => {
    const authToken = localStorage.getItem("authAdmin");
    console.log(authToken);
    if (!authToken) {
      window.location.href = '/dashboard/signin';
    // console.log(localStorage.getItem("authAdmin"));

    }
  }, [])

  return (
    <>
      Dashbaord
    </>
  )
}

