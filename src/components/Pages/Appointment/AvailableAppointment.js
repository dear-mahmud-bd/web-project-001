import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import AppointmentService from './AppointmentService';
import BookingModal from './BookingModal';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    // console.log(services)

    useEffect(() => {
        fetch('http://localhost:5000/times')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    
    return (
        <section className='px-12'>
            <div className='text-center text-2xl'>
                <h1 className='text-secondary'>Available Appointment on: {format(date, 'PP')}</h1>
                <h1 className=''>Please select a service</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center'>
                {services.map(service => <AppointmentService key={service._id} service={service} setTreatment={setTreatment} />)}
            </div>
            {treatment && <BookingModal key='123' treatment={treatment} date={date} setTreatment={setTreatment}></BookingModal>}
        </section>
    );
};

export default AvailableAppointment;