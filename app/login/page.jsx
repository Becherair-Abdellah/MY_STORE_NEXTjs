import React from 'react'
import Image from 'next/image'
import loginImage from '@/public/assets/login.svg'
import LoginForm from '@/_components/LoginForm'
function page() {
  return (
    <>
      <div className="bg-white dark:bg-dark_primary flex flex-col md:flex-row min-h-screen">
        {/* div1 */}
        <div className="w-full md:w-1/2 py-8 md:p-12 flex flex-col justify-center ">
          <div className='m-auto w-[80%]'>
            <h1 className="text-5xl leading-[3.5rem] font-bold mb-4 tracking-[-1px] dark:text-yellow">Login to your Account!</h1>
            <div className="flex space-x-4 mb-4">
            </div>
           <LoginForm/>
            <div className="mt-4 text-center">
              <a href="#" className="text-sm text-primary-primary__c dark:text-yellow">Don&apos;t have an account? Signup</a>
            </div>
          </div>
        </div>
        {/* div2 */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex justify-center">
         
            <Image
            src={loginImage}
            width={400}
            height={400}
            alt="login image"
            />
          
        </div>




      </div>
    </>

  )
}

export default page
