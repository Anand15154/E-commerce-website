import React from 'react'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/ Breadcrum/Breadcrum';

export default function Product() {
  const{all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const Product=all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      
    </div>
  )
}
