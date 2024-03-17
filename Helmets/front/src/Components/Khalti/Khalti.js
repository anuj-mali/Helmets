import React from 'react'
import KhaltiCheckout from "khalti-checkout-web";
import config from './KhaltiConfig';
import { useCartContext } from '../../Context/CartContext';

const Khalti = () => {
    const {cart,final_amount} = useCartContext();
    
    let checkout = new KhaltiCheckout(config);
  
    return (
        <div>
            <button onClick={() => checkout.show({amount: final_amount})}>Pay with Khalti</button>
        </div>
    )


}

export default Khalti