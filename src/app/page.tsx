import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='flex  items-center justify-center min-h-screen'>
    <div className='font-sans border-[1px] w-1/2 p-4 bg-darkBg border-gray-600 rounded-[20px]'>
        <p className='text-sm'> welcome to our website!</p>
        <hr className="my-4 border-gray-600 w-full" />
      <Link href="/blog">go to blog</Link>
    </div>
    </div>
  )
}
