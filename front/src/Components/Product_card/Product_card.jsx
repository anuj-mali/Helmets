import React from 'react';
import {Link} from 'react-router-dom';
import image from "../../Assets/Products/agv/k6.jpg"

const Product_card = (current) => {
    const {id,product_name,price,brand} =current;
  return (
    <Link to={`/Product/${id}`}>
        <div  className="card">
            <figure>
                <img src={image} alt={product_name}/>
                <figcaption className='caption'>
                    {brand}
                </figcaption>
            </figure>
            <div className="card-data">
                <div className="card-data-flex">
                    <h3>
                        {product_name}
                    </h3>
                    <p className="card-data---price">{price}</p>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default Product_card;