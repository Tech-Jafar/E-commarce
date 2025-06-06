import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { ShopContext } from "../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const{addToCart}=useContext(ShopContext)
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
        </div>
        <div className="productdisplay-img">
          <img src={product.image} className="productdisplay-main-img" />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <FaStar className="star-icon"/>
          <FaStar className="star-icon"/>
          <FaStar className="star-icon"/>
          <FaStar className="star-icon"/>
          <FaStarHalfAlt className="star-icon" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-prices-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-prices-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum culpa
          unde laudantium quisquam blanditiis saepe dicta tempora reiciendis
          sequi, 
        </div>
        <div className="productdisplay-right-size">
          <h1> Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category :</span> <span>Woman , Frock, Crop Top</span></p>
        <p className="productdisplay-right-category"><span>Tags :</span> <span>Modern , Latest</span></p>
      </div>
    </div>
  );
};

export default ProductDisplay;
