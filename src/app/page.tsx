import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      <p> welcome to our website!</p>
      <Link href="/blog">go to blog</Link>
    </div>
  )
}
