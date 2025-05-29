import React,{createContext, useContext, useState} from "react"
import all_product from "../assets/all_product"
// import Product from "../pages/Product";

export const ShopContext = createContext(null)

const getDefaultCart=()=>{
    let cart ={};
    for(let index =0;index<all_product.length+1;index++){
       cart[index]=0;
    }
    return cart;
    }

const ShopContextProvider =(Props)=>{
    const[cartItem,setCartItem]=useState(getDefaultCart());
   
   console.log(cartItem)
   const addToCart =(ItemId)=>{
   setCartItem((prev)=>({...prev,[ItemId]:prev[ItemId]+1}))
   console.log(cartItem)
   }
    
   const removeFromCart =(ItemId)=>{
    setCartItem((prev)=>({...prev,[ItemId]:prev[ItemId]-1}))
    }

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItem){
            if(cartItem[item]>0){
               let itemInfo =all_product.find((Product)=>Product.id===Number(item))
               totalAmount +=itemInfo.new_price * cartItem[item]
            }
        }return totalAmount
    }
 const getTotalCartItems=()=>{
      let totalItem = 0;
    for(const item in cartItem){
        if(cartItem[item] > 0){
            totalItem+=cartItem[item];
        }
    }
    return totalItem;
 }
    const contextValue ={getTotalCartItems,getTotalCartAmount,all_product,cartItem,addToCart,removeFromCart}
    return(
        <ShopContext.Provider value={contextValue}>
            {Props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
