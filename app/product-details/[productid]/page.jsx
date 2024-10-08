'use client'
import { useState } from 'react';
function Page() {
  const [check_add,set_check_add] = useState(false);

  return (
    <section className="dark:bg-dark_primary bg-white  text-gray-700 body-font overflow-hidden ">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <img 
          alt="ecommerce" 
          className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" 
          src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80" 
        />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest dark:text-white">MK-1</h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 dark:text-white">T-shirt White</h1>
          <div className="flex mb-4">
            <span className="flex items-center">
              {[...Array(4)].map((_, index) => (
                <svg 
                  key={index} 
                  fill="currentColor" 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  className="w-4 h-4 text-red-500" 
                  viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              ))}
              <svg 
                fill="none" 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                className="w-4 h-4 text-red-500" 
                viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <span className="text-gray-600 ml-3 dark:text-white">4 Reviews</span>
            </span>
           
          </div>
          <p className="leading-relaxed dark:text-white">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
            {/* <div className="flex">
              <span className="mr-3">Color</span>
              <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
              <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
              <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
            </div> */}
            {/* <div className="flex ml-6 items-center">
              <span className="mr-3">Size</span>
              <div className="relative">
                <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                  <option>SM</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                  <svg 
                    fill="none" 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    className="w-4 h-4" 
                    viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
            </div> */}
          </div>
          <div className="flex">
            <span className="title-font font-medium text-2xl text-gray-900 dark:text-white">$ 58.00</span>
            <button className="flex ml-auto text-color_primary bg-yellow border-0 py-2 px-6 focus:outline-none rounded" onClick={()=>{set_check_add(!check_add)}}>
            {check_add?"Added to cart":"Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Page
