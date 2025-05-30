import React from "react";
import new_collection from "../assets/new_collections";
import Item from "./Item";

const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => {
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
};

export default NewCollections;
