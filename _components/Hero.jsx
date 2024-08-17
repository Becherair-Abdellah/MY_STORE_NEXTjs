'use client'
import Image from 'next/image'
import doodle1 from '@/public/assets/doodle1.svg'
import doodle2 from '@/public/assets/doodle2.svg'
import doodle3 from '@/public/assets/doodle3.svg'
import Link from 'next/link'
import { useSelector } from 'react-redux'
function Hero() {

  // const state = useSelector((state)=>{state.count});

  return (
    <section className="dark:bg-dark_primary text-white relative">        
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
      <div className="mx-auto max-w-3xl text-center">
        <h1
          className="text-color_primary dark:text-white text-4xl font-extrabold  sm:text-5xl relative"
        >
            <Image src={doodle3}  width={60} className=" relative top-[-2rem] left-0" alt='doodle'/>
            <Image src={doodle1} width={50} className="hidden  md:block absolute bottom-[-6rem] right-0" alt='doodle' />
            <Image src={doodle2}  width={50}  className="hidden md:block absolute bottom-[-6rem] left-0" alt='doodle'/>
          Shop for my <span className='bg-bg_yellow text-color_primary'>special items</span>.
  
          <span className="sm:block"> Products, Courses , T-shirt. </span>
        </h1>
  
        <p className="mx-auto text-color_primary dark:text-white mt-4 max-w-xl sm:text-xl/relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
          numquam ea!
        </p>
  
        <Link href="products/" className="mt-8 flex flex-wrap justify-center gap-4">
          <div
            className="block w-full rounded  bg-bg_2 px-12 py-3 text-sm text-white font-bold hover:text-white focus:outline-none  sm:w-auto"
      
          >
            Get Started
          </div>
        </Link>
      </div>
    </div>
  </section>
  
  )
}

export default Hero
