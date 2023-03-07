import React from 'react'
import Nav from '../Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

export default function Layout() {
  return (
    <div>
        <Nav />
        <main  className='wrapper' >  
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}
