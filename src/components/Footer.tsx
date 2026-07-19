import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='mx-auto p-4 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-7xl mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 bg-gray-800 p-8 rounded-lg'>
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Store Name"
            width={36} 
            height={36}
          />
          <p className="hidden md:block text-md font-medium tracking-wider pl-2 text-white">Store</p>
        </Link>
        <p className="text-sm text-gray-400">&copy; {currentYear} Store Name.</p>
        <p className="text-sm text-gray-400">All rights reserved.</p>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Terms and Service</Link>
        <Link href="/">Privacy Policy</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <Link href="/">Products</Link>
        <Link href="/">Best Sellers</Link>
        <Link href="/">New Arrivals</Link>
        <Link href="/">Sale</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <Link href="/">About</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Affiliate Program</Link>
      </div>
    </div>
  )
}

export default Footer