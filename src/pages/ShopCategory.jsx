import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { MdKeyboardArrowDown } from "react-icons/md";
import Item from "../components/Item";
// import all_product from '../assets/all_product';

function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img src={props.banner} className="shopcategory-banner" />
      <div className="shopcategory-indexshort">
        <p>
          <span>Showing 1-12 </span>out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by <MdKeyboardArrowDown  className="shopsategory-arrow-icon"/>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
                productId={item.id}
              
           
             
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
}

export default ShopCategory;
