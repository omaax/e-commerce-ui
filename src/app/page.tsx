// import ProductList from "@/components/ProductList"
// import Image from "next/image"

// const Homepage = () => {
//   return (
//     <div className=''>
//       <div className="relative aspect-[3/1] mb-12">
//         <Image src="/featured3.png" alt="Featured Product" fill/>
//       </div>
//       <ProductList />
//     </div>
//   )
// }

// export default Homepage

import ProductList from "@/components/ProductList"
import Image from "next/image"

const Homepage = async ({ searchParams }:{ searchParams: Promise <{ category:string }>}) => {
  const category = (await searchParams).category
  return (
    <>
      <div className="relative left-1/2 -translate-x-1/2 w-screen overflow-x-hidden ">
        <div className="h-[320px] md:h-[420px] lg:h-[450px] mb-4">
          <Image
            src="/featured.png"
            alt="Featured Product"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

          <div className="absolute left-6 md:left-80 top-1/2 -translate-y-1/2 text-white z-10">
            <h1 className="text-2xl md:text-4xl font-bold">
              Built for Everyday Wear
            </h1>
            <p className="mt-2 text-white/80">
              Premium essentials & jackets
            </p>
          </div>
        </div>
      </div>
      <ProductList category={category} params="homepage"/>
    </>
  )
}

export default Homepage
