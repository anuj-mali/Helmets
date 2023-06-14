import { useState, react } from 'react';
import styled from 'styled-components';
import ShippingForm from '../../Components/CheckoutForm/ShippingForm';
import { useCartContext } from '../../Context/CartContext'
import Khalti from '../../Components/Khalti/Khalti';


const CheckOut = () => {
  const {cart,final_amount} = useCartContext();
  const [paymentMethod, setPaymentMethod] = useState('');
  
  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };
  
  return (
    <>
      <Wrapper>
        <div className="container">
        <div className="grid grid-two-column">
          <div>
            <h5>Shipping Details</h5>
            <ShippingForm/>
          </div>
          <div>
          <div className="order-total--amount">
        <div className="order-total--subdata">
          <div>
            <p>Number of Items</p>
            <p> {cart.length}</p>
            </div>   
            <div>
              <p>Total Amount</p>
              <p>Rs. {final_amount}</p>
              </div>     

                <div className='d-flex justify-content-center'>
                                      
                </div>
            </div>
            <div className="order-total--amount">
              <div className="order-total--subdata">
              <h5>Payement Method</h5>
              <p>Select a payment method</p>
              <div className="payment-buttons grid grid-two-column">
                <button
                  className={paymentMethod === 'cash-on-delivery' ? 'active' : ''}
                  onClick={() => handlePaymentMethodChange('cash-on-delivery')}
                >
                  Cash on Delivery
                </button>
                <Khalti/>
                  
              </div>
            </div>
            </div>
        </div>
          </div>
        </div>
        </div>
      </Wrapper>
     
    </>
  );
};

const Wrapper = styled.section`
  text-align: center;

  .grid {
    display: grid;
  }

  .grid-two-column {
    grid-template-columns: 1fr 0.8fr;
    gap: 2rem;
  }
  
  .container {
    width: 80%;
    margin: 1rem auto;
    border: 1px solid #ccc;
  }

  
  h2 {
    margin-bottom: 1rem;
  }

  h5 {
    text-align: left;
  }
  
  .payment-buttons {
    display: flex;
    
    margin-top: 0.5rem; /* Adjusted margin top for spacing */
    flex-wrap: wrap; /* Added flex-wrap property to allow buttons to wrap to the next line */
    button {
      padding: 0.75rem 0.5rem;
      border-radius: 0.5rem;
      background-color: #332d2d;
      color: #cccccc;
      border: none;
      cursor: pointer;
      transition: opacity 0.3s;
    
      &:hover {
        opacity: 0.9;
        color: #ffffff;
      }
    }
  }
   form {
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      margin-bottom: 1rem;
      text-align: left;
      width: 70%;

      label {
        display: block;
        margin-bottom: 0.5rem;
      }

      input,
      select {
        padding: 0.5rem;
        border: 1px solid #ccc;
        width: 100%;
        text-transform: none;
      }

      
    }
    .city-field {
      display: flex;
      align-items: center;
      width: 60%;
    }

    .city-field label {
      margin-right: 0.5rem;
    }

    button {
      padding: 0.75rem 1.5rem;
      margin-buttom: 1rem;
      background-color: #332d2d;
      color: #cccccc;
      border-radius: 0.5rem;
      border: none;
      cursor: pointer;
      transition: opacity 0.3s;
    
      &:hover {
        opacity: 0.9;
        color: #ffffff;
      }
    }
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
  }`;


export default CheckOut;
