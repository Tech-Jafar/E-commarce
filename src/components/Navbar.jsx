import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

function Navbar() {
const [menu,setMenu]=useState("shop")
const {getTotalCartItems}=useContext(ShopContext)


  return (
    <div className='navbar'>
    {/* logo */}
      <div className="nav-logo">
        <img src={logo} alt="logo" className='logo-icon'/>
        <p>SHOPPER</p>
      </div>
      {/* logo close */}


      {/* ul nav */}
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}> <Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}> <Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      {/* ul nav close */}

      {/* cart */}
      <div className="nav-login-cart">
      <Link style={{textDecoration:'none'}} to='/login'><button>Login</button></Link> 
      <Link style={{textDecoration:'none'}}to='/cart'> <AiOutlineShoppingCart  className='cart-icon'/></Link>
         <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
      {/* cart  close*/}
    </div>
  )
}

export default Navbar
