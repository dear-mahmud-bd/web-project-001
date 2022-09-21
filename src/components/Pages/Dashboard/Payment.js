import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';

const Payment = () => {
    const { appointmentId } = useParams();
    const url = `http://localhost:5000/booking/${appointmentId}`;
    const { data: appointment, isLoading } = useQuery(['booking', appointmentId], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }
    return (
        <section className='flex items-center justify-center'>
            <div>
                <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                    <div className="card-body">
                        <p className="text-success font-bold">Hello, {appointment.patientName}</p>
                        <h2 className="card-title">Please Pay for {appointment.treatment}</h2>
                        <p className=''>Your Appointment: <span className='text-orange-700'>{appointment.date}</span> at {appointment.slot}</p>
                        <p className='text-center'>Please pay: ${appointment.price}</p>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                    <div className="card-body">
                        {/* <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payment;