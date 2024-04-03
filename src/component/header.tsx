import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className="bg-gray-300 p-2 gap-7 flex">Home
    <div><Link href={"/dashboard"}>Dashboard</Link></div>
    <div><Link href={"/setting"}>Setting</Link></div>
    <div><Link href={"/analytics"}>Analytics</Link></div>
    <div><Link href={"/analytics/blog"}>Blog</Link></div>
    <div><Link href={"/analytics/blog/password"}>Password</Link></div>
    
    </div>
  )
}

export default Header;