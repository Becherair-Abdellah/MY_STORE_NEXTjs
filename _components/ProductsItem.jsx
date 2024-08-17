import Product from "./Product"
import Link from "next/link"
function ProductsItem() {
  return (
<section className="dark:bg-dark_primary bg-white">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header className="text-center">
      <h2 className="text-xl font-bold text-white sm:text-3xl">Product Collection</h2>

      <p className="mx-auto mt-4 max-w-md text-white">
      Purchase my unique and wonderful items, whether they are courses, T-shirts, or stationery
      </p>
    </header>

    <ul className="mt-[6rem] grid gap-8 sm:grid-cols-2 lg:grid-cols-4 ">
       <Product title="Next js Course" price={43.6} />
      <Product title="Next js Course" price={43.6} />
       <Product title="Next js Course" price={43.6} /> 
       <Product title="Next js Course" price={43.6} /> 
      {/* <Link href={`/product-details/${2}`}> <Product title="Next js Course" price={43.6} /></Link>  */}
    </ul>
    <Link href="products/" className="mt-8 flex flex-wrap justify-center gap-4">
          <div
            className="block w-full rounded  bg-bg_2 px-12 py-3 text-sm text-white font-bold hover:text-white focus:outline-none  sm:w-auto"
            href="#"
          >
            See More Products
          </div>
        </Link>
  </div>
</section>

  )
}

export default ProductsItem
