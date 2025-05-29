import React from 'react' 
import exculive3 from "../assets/exculive3.png"

function Offers() {
  return (
    <div className='offers'>
     <div className="offers-left">
      <h1>Exclusive</h1>
      <h1>Offers For You</h1>
      <p>ONLY ON BEST SELLERS PRUDECTS</p>
      <button>Check Now</button>
     </div>
     <div className="offers-right">
      <img src={exculive3} alt="img" className='excu-img'/>
     </div>
    </div>
  )
}

export default Offers
