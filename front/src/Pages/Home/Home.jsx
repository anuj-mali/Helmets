import React from 'react';
import Feedback from '../../Components/Feedback/Feedback';
import Carousel from '../../Components/Carousel/Carousel';
import Featured_Product from '../../Components/Featured/Featured_Product';


const Home =() =>{
  return (
    <>  
    <Carousel/>
    <Featured_Product/>
    <Feedback/>
    </>
  )
}

export default Home