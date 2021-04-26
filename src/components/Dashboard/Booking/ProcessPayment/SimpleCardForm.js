/* eslint-disable no-unused-vars */
import React from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useState } from 'react';

const SimpleCardForm = ({handlePayment}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
     setPaymentError(error.message);
     setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);
      handlePayment(paymentMethod.id);
    }
  };

  return (
   <div style={{border:'4px solid white', backgroundColor:'transparent', padding:'80px'}} className='stripe-fields'>
      <form onSubmit={handleSubmit} className='form-control stripe-fields'>
      <CardElement style={{color:'white'}} />
       
       <div className='btn-main' style={{marginBottom:'20px'}}>
       <button type="submit" disabled={!stripe} className='btn-book booking' style={{padding: '10px', marginTop:'25px'}}> 
        Pay Cash
      </button>
       </div>
    </form>
    {
      paymentError&& <p style={{color:'red'}}>{paymentError}</p>
    }
    {
      paymentSuccess&& <p style={{color:'green'}}>Your payment was successful.</p>
    }
   </div>
  );
};

export default SimpleCardForm;