'use client'
import Link from "next/link";
import Button_added from "./Button_added";
function Product({img,price,title}) {
  
  return (
<div  className="group relative block overflow-hidden">
<div>
  <Link href={`/product-details/${2}`}>
  <img
    src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
    alt=""
    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
  />

  <div className="relative border border-gray-300 border-t-0 dark:bg-dark_primary bg-white p-6">
    <span className="whitespace-nowrap bg-bg_yellow px-3 py-1.5 text-xs font-medium"> New </span>

    <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">{title}</h3>

    <p className="mt-1.5 text-sm text-gray-700 dark:text-white">$ {price}</p>

   
  </div>
  </Link>
</div>

  
<Button_added/>
  
</div>
  )
}

export default Product
