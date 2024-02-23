import React from 'react'
import './navbar.css';
import logo from '../assets/logo.png'
function navbar() {
  return (
    <div className='nav-background'>
    <header>
    {/* <img src={logo} className='logo'></img> */}
        <nav >
            
            <a href='/'>Categories</a>
            <a href='/#'>About</a>
            <a href='/#'>sign up/sign in</a>
            <a href='/add-to-cart'>Add to cart</a>
        </nav>
    </header>
    </div>
  )
}

export default navbar
