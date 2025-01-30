'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Nav = () => {
    const pathName = usePathname()
    console.log( 'pathname', pathName)

    const links = [
        {
            name : 'Home',
            path : '/'
        },

        {
            name : 'Services',
            path : '/services'
        },

        {
            name : 'Resume',
            path : '/resume'
        },

        {
            name : 'Work',
            path : '/work'
        },

        {
            name : 'Contact',
            path : '/contact'
        }
    ]
  return (
    <div>
      <nav className='flex gap-8'>
       {
        links.map((link , i) => {
            return <Link key={i} href={link.path} className={`${link.path === pathName && 'text-accent border-b-2 border-accent'} capitalize hover:text-accent transition-all`}> {link.name} </Link>
        })
       }
      </nav>
    </div>
  )
}

export default Nav
