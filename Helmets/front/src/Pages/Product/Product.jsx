import {React, useEffect, useState} from 'react';
//import ReactMarkdown from "react-markdown";
//import image from '../../Assets/Products/agv/k6.jpg';
import CartAmountToggle from '../../Components/cartAmount/CartAmountToggle';
import {Link, useParams} from 'react-router-dom';
import { useProductContext } from '../../Context/ProductContext';

import { useCartContext } from '../../Context/CartContext';

const Product = () => {

    const {addToCart} = useCartContext();
    const {singleProduct, isSingleLoading, getSingleProduct } = useProductContext();
    const {id} = useParams();
    console.log(id);
    async function fetchData() {
         getSingleProduct(`/${id}`);
    }
    
    useEffect(() => {
        fetchData();
    },[]);
    const product= singleProduct;
    // useEffect(() => {
    //     getSingleProduct("/products");
    // },[]);
      console.log(singleProduct);
    
    const {name,unit_price,brand,image, description} = singleProduct;
    const brand_name = brand.name;
    
    const [amount, setAmount] = useState(1);

    const setDecrease =() => {
        amount>1 ?setAmount(amount-1):setAmount(1);
    };
    const setIncrease =() => {
        amount<10 ?setAmount(amount+1):setAmount(10);
    };
    
    // if(singleProduct.length === undefined){
    //     return <h2 className="section-title">no product to display</h2>
    // }
    
    return (
    <>
    <div className="w-full md:py-20 m-5">
        <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
                <div className="container row align-items-center">
                    {/* left column start */}
                    <div className="col ">
                      <div className="d-flex justify-content-center position-fixed-top">   
                        <img src={image} width="300px"/>
                        </div>
                    </div>
                    {/* left column end */}

                    {/* right column start */}
                    <div className="col">
                        {/* PRODUCT TITLE */}
                        <div className="mb-2 leading-tight">
                            <p className="fw-bold">{name}</p>
                        </div>

                        {/* PRODUCT SUBTITLE */}
                        <div className="text-lg font-semibold mb-5">
                            <p>{brand_name}</p>
                        </div>

                        {/* PRODUCT PRICE */}
                        <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold">
                                MRP :  रू {unit_price}
                            </p>
                                
                        </div>

                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            <p>(Price includes all applicable duties)</p>
                        </div>
                        <CartAmountToggle 
                            amount={amount}
                            setDecrease={setDecrease}
                            setIncrease={setIncrease}
                            /> 


                        {/* ADD TO CART BUTTON START */}
                        <Link
                            to="/cart"
                            onClick = {() => addToCart(id, amount, product)}
                            >
                                
                        <button
                            className="w-full py-2 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 mx-auto hover:opacity-75"
                            
                        >
                            Add to Cart
                        </button>
                        </Link>
                        {/* ADD TO CART BUTTON END */}


                        <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className="text-md font-medium text-black/[0.5] mb-5">
                                {description}
                            </div>
                        </div>
                    </div>

                    {/* right column end */}
                </div>

          </div>
        </div>
   
    </> 
  )
}

export default Product
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useProductContext } from '../../Context/ProductContext';
// import CartAmountToggle from '../../Components/cartAmount/CartAmountToggle';

// const Product = () => {
//   const { singleProduct, isSingleLoading, getSingleProduct, } = useProductContext();

//   const { id } = useParams();


//   useEffect(() => {
//     getSingleProduct(`/products?id=${id}`);
//   },[]);

//   const [amount, setAmount] = useState(1);

//   const setDecrease = () => {
//     amount > 1 ? setAmount(amount - 1) : setAmount(1);
//   };

//   const setIncrease = () => {
//     amount < 10 ? setAmount(amount + 1) : setAmount(10);
//   };

//   if (isSingleLoading || !singleProduct) {
//     return <h2 className="section-title">Loading...</h2>;
//   }

//   const { name, unit_price, brand, image, description } = singleProduct;
//   const brand_name = brand.name;

//   return (
//     <>
//       <div className="w-full md:py-20 m-5">
//         <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
//                 <div className="container row align-items-center">
//                     {/* left column start */}
//                     <div className="col ">
//                       <div className="d-flex justify-content-center position-fixed-top">   
//                         <img src={image} width="300px"/>
//                         </div>
//                     </div>
//                     {/* left column end */}

//                     {/* right column start */}
//                     <div className="col">
//                         {/* PRODUCT TITLE */}
//                         <div className="mb-2 leading-tight">
//                             <p className="fw-bold">{name}</p>
//                         </div>

//                         {/* PRODUCT SUBTITLE */}
//                         <div className="text-lg font-semibold mb-5">
//                             <p>{brand_name}</p>
//                         </div>

//                         {/* PRODUCT PRICE */}
//                         <div className="flex items-center">
//                             <p className="mr-2 text-lg font-semibold">
//                                 MRP :  रू {unit_price}
//                             </p>
                                
//                         </div>

//                         <div className="text-md font-medium text-black/[0.5]">
//                             incl. of taxes
//                         </div>
//                         <div className="text-md font-medium text-black/[0.5] mb-20">
//                             <p>(Price includes all applicable duties)</p>
//                         </div>
//                         <CartAmountToggle 
//                             amount={amount}
//                             setDecrease={setDecrease}
//                             setIncrease={setIncrease}
//                             /> 


//                         {/* ADD TO CART BUTTON START */}
//                         <button
//                             className="w-full py-2 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 mx-auto hover:opacity-75"
                            
//                         >
//                             Add to Cart
//                         </button>
//                         {/* ADD TO CART BUTTON END */}


//                         <div>
//                             <div className="text-lg font-bold mb-5">
//                                 Product Details
//                             </div>
//                             <div className="text-md font-medium text-black/[0.5] mb-5">
//                                 {description}
//                             </div>
//                         </div>
//                     </div>

//                     {/* right column end */}
//                 </div>

//           </div>
//         </div>
//     </>
//   );
// };

// export default Product;
