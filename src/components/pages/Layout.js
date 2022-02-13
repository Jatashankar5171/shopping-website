import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import './Layout.css'

const Layout = () => {
  const cartCount = useSelector((state)=>state.cart.totalCount)
  return (
    <>
    <div className='Header'>
        <Link to='/'><h1>Home</h1></Link>
        <Link to='/cart'><h1>Cart : <span>{cartCount} items</span></h1></Link>
    </div>
    <Outlet/>
    
    </>
  )
}

export default Layout