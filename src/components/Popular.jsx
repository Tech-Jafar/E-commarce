import React from "react";
import data_product from "../assets/data";
import Item from "./Item";

function Popular() {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMAN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => {
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
        })}
      </div>
    </div>
  );
}

export default Popular;
