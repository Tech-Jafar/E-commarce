import React from 'react'
import hand_icon from "../assets/hand-icon.png"
import { IoIosArrowRoundForward } from "react-icons/io";

import hero_left from "../assets/hero-left.png"

function Hero() {
  return (
    <div className='hero'>
    {/* hero-left */}
      <div className="hero-left">
        <h2>NEW ARRIVAIL ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" className='img-hand'/>
          </div>
          <p>collection</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <IoIosArrowRoundForward  className='arrow-icon'/>
        </div>
      </div>
      <div className='hand-hand-icon'></div>

{/* hero left close */}
      <div className="hero-right">
        <img src={hero_left} alt=""  className='img-hero'/>
      </div>
    </div>
  )
}

export default Hero
