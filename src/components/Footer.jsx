import React from 'react'
import footer_logo from "../assets/logo.png"
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-logo">
      <img src={footer_logo} alt="img" className='footer-logo-icon'/>
      <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
        <FaInstagram />
        </div>

        <div className="footer-icons-container">
        <FaPinterest />
        </div>

        <div className="footer-icons-container">
        <FaWhatsapp />
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
