import React from 'react'
import Navbar from '../components/NavbarComponent'
import { Outlet } from 'react-router-dom'


function HomeLayout() {
  return (
    <div >
      <Navbar/>
      {/* <div className='max-w-screen-xl items-center justify-between mx-auto'> */}
      <Outlet/>
      {/* </div> */}
      
    </div>
  )
}

export default HomeLayout
