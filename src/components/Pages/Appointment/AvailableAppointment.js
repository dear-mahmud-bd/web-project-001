import React, { useState } from 'react';
import { format } from 'date-fns';
import { useQuery } from 'react-query';
import AppointmentService from './AppointmentService';
import BookingModal from './BookingModal';
import Loading from '../../Shared/Loading';

const AvailableAppointment = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');

    const { isLoading, refetch, data: services } = useQuery(['available', formattedDate], () =>
        fetch(`https://mighty-cove-59999.herokuapp.com/available?date=${formattedDate}`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading />;
    }

    // useEffect(() => {
    // fetch(`https://mighty-cove-59999.herokuapp.com/available?date=${formattedDate}`)
    //     .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formattedDate])

    return (
        <section className='px-12'>
            <div className='text-center text-2xl'>
                <h1 className='text-secondary'>Available Appointment on: {format(date, 'PP')}</h1>
                <h1 className=''>Please select a service</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center'>
                {services?.map(service => <AppointmentService key={service._id} service={service} setTreatment={setTreatment} />)}
            </div>
            {treatment && <BookingModal refetch={refetch} treatment={treatment} date={date} setTreatment={setTreatment}></BookingModal>}
        </section>
    );
};

export default AvailableAppointment;