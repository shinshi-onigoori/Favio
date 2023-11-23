"use client";

import { signOut } from 'next-auth/react';
import React, { useEffect } from 'react'
import { callbackify } from 'util';

const SignOut = () => {

useEffect(() => {
    signOut({
        callbackUrl: "/",
        redirect: true
});
    
}, []);

  return (
    null
  )
}

export default SignOut
