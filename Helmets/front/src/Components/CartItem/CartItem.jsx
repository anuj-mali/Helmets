import React from 'react'
import CartAmountToggle from '../cartAmount/CartAmountToggle'
import { useCartContext } from '../../Context/CartContext'

const CartItem = ({amount,
    brand,
    id,
    image,
    name,
    price,
    }) => {
        const { removeItem, setIncrease,setDecrease } = useCartContext();
        
        console.log(id);
  return <div className="cart_heading grid grid-five-column">
        <div className="cart-image--name">
            <div>
                <figure>
                    <img src={image} alt={name} />
                </figure>
            </div>
            <div>
                <p>{name}</p>
            </div>
        </div>
        <div className="cart-hide">
            <p>{price}</p>
            </div>
        <div className="cart-quantity">
        <CartAmountToggle 
                            amount={amount}
                            setDecrease={()=>setDecrease(id)}
                            setIncrease={()=>setIncrease(id)}
                            /> 

            </div>
        <div className="cart-hide">
            <p>{price * amount}</p>
        </div>
        <div className="cart-remove" >
            <button onClick={()=>removeItem(id)}>
                <i className="fas fa-trash" ></i>
            </button>
            </div>
    </div> 
    
  
}

export default CartItem
