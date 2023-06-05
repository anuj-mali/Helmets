import React from 'react';
import {Link} from 'react-router-dom';
//import image from "../../Assets/Products/agv/k6.jpg"

const Product_card = (current) => {
    const {id,name,unit_price,brand,image} =current;
    const brand_name = brand.name;
  return (
    <Link to={`/Product/${id}`}>
        <div  className="card">
            <figure>
                <img src={image} alt={name}/>
                <figcaption className='caption'>
                    {brand_name}
                </figcaption>
            </figure>
            <div className="card-data">
                <div className="card-data-flex">
                    <h3>
                        {name}
                    </h3>
                    <p className="card-data---price">{unit_price}</p>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default Product_card;