import React from 'react'
import { Title } from "./text";
import Link from 'next/link'
import Image from 'next/image'
import { banner } from '@/images'

const HomeBanner = () => {
  return (
    <div className="py-16 md:py-0 bg-shop-light-pink rounded-lg px-10 lg:px-24 flex items-center justify-between">
      <div className="space-y-5">
        <Title >
            Grap Upto 50% off <br/>
            on Selected headphones.
        </Title>
        <Link href={"/shop"} className="bg-shop_dark_green/90 text-white/90 px-5 py-2 rounded-md text-sm 
        font-semibold hover:text-white hover:bg-shop_dark_green">Buy Now</Link>
      </div>
      <div>
        <Image src={banner} alt="banner" className="hidden md:inline-flex w-96"/>
      </div>
    </div>
  )
}

export default HomeBanner
