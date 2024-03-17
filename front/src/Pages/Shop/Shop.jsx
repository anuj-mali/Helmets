import React from 'react';
import image from '../../Assets/Products/agv/k6.jpg';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { useProductContext } from '../../Context/ProductContext';

const Shop = () => {
  const {isLoading, products} =useProductContext();
  console.log(products);
  return (
    <>
    <p>Shopppp</p>
    </>
  )
}

export default Shop