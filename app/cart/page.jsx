"use client"
import { useSelector } from "react-redux";
import ProductsCart from "../../_components/ProductsCart";
import { useEffect } from "react";
function page() {

  return (
    <section className="dark:bg-dark_primary bg-white">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="mx-auto max-w-3xl">
      <header className="text-center">
        <h1 className="text-xl font-bold dark:text-white text-color_primary sm:text-3xl">Your Cart</h1>
      </header>

      <div className="mt-8">
        <ul className="space-y-4">

   <ProductsCart/>
   <ProductsCart/>
   <ProductsCart/>


        </ul>

        <div className="mt-8 flex  border-t border-gray-100 pt-8">
          <div className="w-screen   space-y-4">
            <dl className="space-y-0.5 text-lg dark:text-white">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd>$ 250</dd>
              </div>

              <div className="flex justify-between">
                <dt>VAT</dt>
                <dd>$ 25</dd>
              </div>

              <div className="flex justify-between">
                <dt>Discount</dt>
                <dd>-$ 20</dd>
              </div>

              <div className="flex justify-between !text-base font-medium">
                <dt>Total</dt>
                <dd>$ 200</dd>
              </div>
            </dl>


            <div className="flex justify-end">
              <a
                href="#"
                className="block rounded bg-bg_yellow  px-5 py-3 text-sm font-bold transition text-color_primary"
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default page
