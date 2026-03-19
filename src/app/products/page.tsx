import ProductList from "@/components/ProductList"
import { promises } from "dns"

const ProductsPage = async ({searchParams} : {searchParams: Promise <{category: string}>}) => {
    const category = (await searchParams).category
  return (
    <div className='mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl'>
        <ProductList category={category} params="products"/>
    </div>
  )
}

export default ProductsPage