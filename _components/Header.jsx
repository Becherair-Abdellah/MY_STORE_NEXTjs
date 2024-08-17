'use client'
import Image from "next/image"
import logo from '@/public/bglogo.png'
import Link from "next/link"
import { useSelector } from "react-redux";
import { useEffect } from "react";
function Header() {
  const state = useSelector(({nbr_product:{count}})=> count);
  useEffect(()=>{
    console.log(state);
  },[state]);
  return (
<header className="bg-white dark:bg-dark_primary shadow-md dark:shadow-white">
  <div className="mx-auto flex h-16 max-w-screen-xl overflow-hidden items-center gap-8 px-4 sm:px-6 lg:px-8">
    
       <a href="/" className="relative mr-4">
        <h1 className=" font-bold text-3xl z-[1] relative text-color_primary ">Abdellah</h1>
       <Image src={logo}  width={280}  alt="logo"  className="absolute top-[-2.4rem] scale-[1.6]"/>
       </a>
   

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">

            
          <li>
            <Link
              className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
              href="/products"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
              href="/cart"
            >
              Cart <strong className="text-yellow">( {state} )</strong>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="block rounded-md bg-bg_yellow px-5 py-2.5 text-sm  text-color_primary font-bold transition  "
            href="/login" 
          >
            Login
          </a>

          <a
            className="hidden rounded-md border-yellow-500 border-2 bg-gray-100 px-5 py-2.5 text-sm font-medium text-color_primary transition sm:block dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
            href="#"
          >
            Register
          </a>
        </div>

        <button
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>


  )
}

export default Header
