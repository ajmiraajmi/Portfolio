import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const RootLayout = () => {
  return (
    <div>
        <Navbar />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default RootLayout