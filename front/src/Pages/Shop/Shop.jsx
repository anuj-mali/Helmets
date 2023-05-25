import React from 'react';
import image from '../../Assets/Products/agv/k6.jpg';
import ProductCard from '../../Components/ProductCard/ProductCard';


const Shop = () => {
  return (
    <>
    <div class='d-flex justify-content-between w-75 mx-auto'>
        <ProductCard />
        <ProductCard/>
        <ProductCard/>
    </div>
    </>
  )
}

export default Shop