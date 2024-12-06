import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'

const Navbar = () => {

  const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<h/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}>Hombre{menu==="mens"?<h/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}>Mujer{menu==="womens"?<h/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}>Niños{menu==="kids"?<h/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt="" />
            <div className="nav-cart-count"></div>
        </div>
    </div>
  )
}

export default Navbar