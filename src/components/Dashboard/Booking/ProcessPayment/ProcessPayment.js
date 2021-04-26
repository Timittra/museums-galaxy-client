import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51Ie3NVAHm0zpQ52n9GhB67QR1julzhQ6LrkeUhCRgYchXdlJZqIaFC5QV9Q7mkHpe7tsRghIzX9CGBKnQwDIliRf00UEMi8M0D');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
          <SimpleCardForm handlePayment={handlePayment} />
        </Elements>
    );
};

export default ProcessPayment;