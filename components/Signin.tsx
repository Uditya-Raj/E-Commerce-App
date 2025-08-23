import {SignInButton } from '@clerk/nextjs'
import React from 'react'

const Signin = () => {
  return (
    <SignInButton mode="modal">
      <button className="text-sm font-semibold text-lightColor hover:cursor-pointer hover:text-shop_light_green hoverEffect">
        login
      </button>
    </SignInButton>
  );
}

export default Signin
