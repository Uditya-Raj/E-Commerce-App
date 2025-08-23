import { Heart } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const FavouriteButton = () => {
  return (
    <Link href="/cart" className="relative">
      <Heart className="w-5 h-5 hover:text-shop_light_green hoverEffect" />
      <span
        className="absolute -top-1 -right-1 bg-shop_dark_green rounded-full
       text-white h-3.5 w-3.5 flex items-center justify-center font-semibold text-xs"
      >
        0
      </span>
    </Link>
  );
}

export default FavouriteButton
