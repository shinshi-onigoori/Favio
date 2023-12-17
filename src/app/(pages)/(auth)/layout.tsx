import RootLayout from '@/app/layout';
import React from 'react'

interface ProtectedLayoutProps {
    children: React.ReactNode | React.ReactNode[];
}

const AuthLayout = ({children}:ProtectedLayoutProps) => {
  return (
    <>
        {children}
    </>
  )
}

export default AuthLayout;