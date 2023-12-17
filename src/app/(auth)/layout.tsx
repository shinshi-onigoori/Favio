import RootLayout from '@/app/layout';
import React from 'react'

interface authLayoutProps {
    children: React.ReactNode | React.ReactNode[];
}

const AuthLayout = ({children}:authLayoutProps) => {
  return (
    <>
        {children}
    </>
  )
}

export default AuthLayout;