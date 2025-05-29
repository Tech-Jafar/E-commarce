import React from "react";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <div className="item">
      <Link to={`/product/${props.productId}`}>
        <img onClick={window.scrollTo(0,0)} src={props.image} alt="img" />
      </Link>
      <p>{props.name}</p>
      <div className="itme-prices">
        <div className="item-price-new">$ {props.new_price}</div>
        <div className="item-price-old">$ {props.old_price}</div>
        {/* <div className="item-price-old">$ {props.productId}</div> */}
     


   
      </div>
    </div>
  );
}

export default Item;
