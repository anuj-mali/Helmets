import React from 'react';
import {useProductContext} from "../../Context/ProductContext";

const About = () => {
  const {singleProduct ,getSingleProduct} =useProductContext();
  React.useEffect(()=>{
    getSingleProduct("/products/2");
  },[])
  console.log(singleProduct);
  
  return (
    <><div>About</div>
    
    </>
  )
}

export default About