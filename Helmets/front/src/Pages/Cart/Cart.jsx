import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import CartItem from '../../Components/CartItem/CartItem'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Cart = () => {
    const {cart,clearCart,total_amount,shipping_fee,final_amount} = useCartContext();
    console.log("cart");
    console.log(cart);
  return (
    
    <Wrapper>
        <div className="container">
            <div className="cart_heading grid grid-five-column">
                <p>Item</p>
                <p className="cart-hide">Price</p>
                <p>Quantity</p>
                <p className="cart-hide">Sub Total</p>
                <p>Remove</p>

            </div>
            <hr/>
            {cart.length === 0 ? (<>
                <h3>Cart is Empty</h3>
                
                </>
               ) : (
                <div className="cart-item">
                  {cart.map((current) => (
                    <CartItem key={current.id} {...current} />
                  ))}
                </div>
              )}
            <hr/>
            <div className="d-flex justify-content-between">
              <Link to="/shop" className="btn btn-clear">Continue Shopping</Link>
      {cart.length === 0 ? 
      (<button className="btn btn-danger" onClick={clearCart} disabled>Clear Cart</button>)
      : (<button className="btn btn-danger" onClick={clearCart}>Clear Cart</button>)
}</div>
<div className="order-total--amount">
        <div className="order-total--subdata">
          <div>
            <p>Subtotal</p>
            <p>Rs. {total_amount}</p>
            </div>   
            <div>
              <p>Shipping Fees</p>
              <p>Rs. {shipping_fee}</p>
              </div>     
              <div>
                <p>Total</p>
                {/* <p>Rs. {parseInt(parseInt(total_amount)+parseInt(shipping_fee))}</p> */}
                <p>Rs. {final_amount}</p>
                </div>
                <div className='d-flex justify-content-center'>
                    <Link to="/checkout" className="btn">Check Out</Link>                  
                </div>
            </div>
        </div>
        </div>
    </Wrapper>
    
    )
}

const Wrapper = styled.section`
  padding: 9rem 0;
  .container{
    width: 80%;
  }
  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  h3{
    text-align: center;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;
      }
    }
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    margin: 2rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 3rem;
    }
    div {
      display: flex;
      gap: 3rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

 
`;

export default Cart