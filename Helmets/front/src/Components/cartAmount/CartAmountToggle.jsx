import React from 'react';
import {FaMinus, FaPlus} from "react-icons/fa";

const CartAmountToggle = ({amount, setDecrease, setIncrease}) => {
  return (
    <div className='cart-button my-2'>
        <div className="amount-toggel d-inline-flex">
            <button className='btn btn-sm' onClick={()=>setDecrease()}>
                <FaMinus/>
            </button>
            <div className="amount-style mx-2">{amount}</div>
            <button className='btn btn-sm' onClick={()=>setIncrease()}>
                <FaPlus/>
            </button>
        </div>
    </div>
  )
}

export default CartAmountToggle