'use client'
import { useState } from "react";
import { nbr_product_increase } from "@/redux/features/nbr-product-slice";
import { nbr_product_decrease } from "@/redux/features/nbr-product-slice";
import { useDispatch } from "react-redux";
function Button_added() {
    const [check_add,set_check_add] = useState(false);
    // use dispatch function
    const dispatch = useDispatch();
  return (
    <button
    className="block relative w-full rounded bg-bg_yellow p-2 text-md font-medium transition hover:scale-105 mt-3"
  onClick={()=>{
    dispatch(!check_add?nbr_product_increase("increase"):nbr_product_decrease("decrease"));
    set_check_add(!check_add)}
    }>
    {check_add?"Added to cart":"Add to Cart"}
  </button>
  )
}

export default Button_added
