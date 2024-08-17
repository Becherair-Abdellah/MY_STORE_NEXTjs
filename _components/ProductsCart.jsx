'use client'
import { useRef } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
export default function ProductsCart() {
    const removeItem = useRef();
  return (
    <li ref={removeItem} className="flex items-center gap-4 ">
    <img
      src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
      alt=""
      className="size-32 rounded object-cover"
    />

    <div className="">
      <h1 className="text-xl  text-color_primary dark:text-white font-bold">Basic Tee 6-Pack</h1>
      <h3 className="text-xl  text-color_primary dark:text-white">price : $540</h3>

      <dl className="mt-0.5 space-y-px text-sm text-color_primary dark:text-white">
        <div>
          <dt className="inline">Size:</dt>
          <dd className="inline">XXS</dd>
        </div>

        <div>
          <dt className="inline">Color:</dt>
          <dd className="inline">White</dd>
        </div>
      </dl>
    </div>

    <div className="flex flex-1 items-center justify-end gap-2">
      <form>
        <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>

        <input
          type="number"
         
          value={1}
        
          className="h-8 w-8 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
        />
      </form>

      <button className="text-gray-600 transition " onClick={()=>{
        removeItem.current.remove();
      }}>
        <span className="sr-only">Remove item</span>
        <FaRegTrashAlt size={18} className="dark:text-red-500 text-color_primary " />
      </button>
    </div>
  </li>
  )
}
