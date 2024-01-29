import React ,{useContext}from 'react'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/ Breadcrum/Breadcrum';
import { ShopContext } from '../Context/ShopContext';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

export default function Product() {
  const{all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product=all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      
    </div>
  )
}
