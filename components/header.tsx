import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='mx-2 comtainer'>
      <nav className='flex justify-between items-center px-6 py-4 '>
        <Link href={"/"}>
          <Image
            src={"/assets/logo.png"}
            alt="Innerleaf Logo"
            width={200}
            height={60}
            className='h-28 w-auto object-contain'
            priority
          />
        </Link>
        <div className='flex items-center gap-4'>
         
        </div>
      </nav>
    </header>
  )
}

export default Header
