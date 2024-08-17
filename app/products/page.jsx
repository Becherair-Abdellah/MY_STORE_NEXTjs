'use client'
import Product from "../../_components/Product"
import Link from "next/link"

export default function page() {

  return (
<section className="dark:bg-dark_primary bg-white">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header className="text-center">
      <h2 className="text-xl font-bold text-color_primary dark:text-white sm:text-3xl">All My Products Here!!</h2>

      <p className="mx-auto mt-4 max-w-md text-color_primary dark:text-white">
      Purchase my unique and wonderful items, whether they are courses, T-shirts, or stationery
      </p>
    </header>

    <ul className="mt-[6rem] grid gap-8 sm:grid-cols-2 lg:grid-cols-4 ">
    <Product title="Next js Course" price={43.6} />
    <Product title="Next js Course" price={43.6} />
    <Product title="Next js Course" price={43.6} />
    <Product title="Next js Course" price={43.6} />
    <Product title="Next js Course" price={43.6} />
    <Product title="Next js Course" price={43.6} />

    </ul>
  </div>
</section>
  )
}
