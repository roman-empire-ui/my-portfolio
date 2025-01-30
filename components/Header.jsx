import Link from 'next/link'
import React from 'react'
import Nav from './Nav'
import { Button } from './ui/button'
import MobileView from './MobileView'

const Header = () => {
  return (
    <div>
      <header className='py-8 xl:py-12 text-white'>
        <div className='container mx-auto flex justify-between items-center'>
            <Link href= '/'>
                <h1 className='text-4xl xl:text-5xl font-semibold'>
                    Srinivas<span className='text-accent'>.</span>
                </h1>
            </Link>

            <div className='hidden xl:flex  items-center gap-8'>
                <Nav/>
                <Link href='/contact'>
                <Button>Hire Me</Button>
                </Link>
            </div>

            <div className='xl:hidden items-center'>
               <MobileView/>
            </div>
            
            </div>
        
        </header>
    </div>
  )
}

export default Header
