"use client";

import { SessionProvider } from 'next-auth/react';
import React from 'react'

interface ProviderProps {
    children: React.ReactNode | React.ReactNode[];
}

const Providers = ({children}: ProviderProps) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default Providers;
