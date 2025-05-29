import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from "../components/Breadcrum"
import ProductDisplay from '../components/ProductDisplay1';
import DescriptionBox from '../components/DescriptionBox';
import ReletedProduct from '../components/ReletedProduct';

const Product = () => {

  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product = all_product.find((e)=>e.id === Number(productId));
  console.log(productId);
  return (
   
    <div>
     <Breadcrum product={product}/>
     <ProductDisplay product={product}/>
     <DescriptionBox/>
     <ReletedProduct/>
    </div>
  )
}

export default Product