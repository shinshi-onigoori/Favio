import EditHeader, { EditHeaderProps } from '@/app/components/editHeader';
import React from 'react'
import { Toaster } from 'react-hot-toast';

type BlogLayoutProps = {
    children: React.ReactNode | React.ReactNode[]
}


const BlogLayout = ({children}: BlogLayoutProps) => {
  return (
    <div>
      <Toaster />
        {children}
    </div>
  )
}

export default BlogLayout;
