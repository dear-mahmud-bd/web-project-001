import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ appointment }) => {
    const [cardError, setCardError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [cardSuccess, setCardSuccess] = useState('');
    const stripe = useStripe();
    const elements = useElements();


    const { _id, price, patient, patientName } = appointment;
    const [clientSecret, setClientSecret] = useState('');
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch('https://mighty-cove-59999.herokuapp.com/create-payment-intent', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data?.clientSecret));
    }, [price]);

    // 
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('[error]', error);
            setCardError(error?.message);
        } if (paymentMethod) {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('');
        }


        setCardSuccess('');
        // confirm card payment ...
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patient
                    },
                },
            },
        );
        if (intentError) {
            console.log(intentError)
            setCardError(intentError?.message);
        } else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            console.log(paymentIntent)
            setCardSuccess('Coungrats.! your payment is completed');

            // Store and update payment data ...
            const payment = {
                appointment: _id,
                transactionId: paymentIntent.id
            }
            fetch(`https://mighty-cove-59999.herokuapp.com/booking/${_id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe || !clientSecret || cardSuccess} className="btn btn-sm btn-primary mt-3 uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
                    Pay
                </button>
            </form>
            {
                cardError && <p className=' text-red-500'>{cardError}</p>
            }
            {
                cardSuccess && <div className='text-green-500'>
                    <p>{cardSuccess}</p>
                    <p>Your transaction Id: <span className="text-orange-500 font-bold">{transactionId}</span> </p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;