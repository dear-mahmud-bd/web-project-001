import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryBtn from '../../Shared/PrimaryBtn';

const HomeAppointment = () => {
    return (
        <div className='mb-24'
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className='flex justify-center items-center px-12'>
                <div className='md:flex-1'>
                    <img className='lg:mt-[-150px] hidden md:block' src={doctor} alt="doctor" />
                </div>
                <div className='md:flex-1 p-5'>
                    <h1 className="text-xl font-bold text-secondary">Appointment</h1>
                    <h1 className="text-4xl font-semibold text-white py-5">Make an appointment Today</h1>
                    <p className="text-white mb-10 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryBtn>Get Appointment</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default HomeAppointment;