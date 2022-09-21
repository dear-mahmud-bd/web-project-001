import React from 'react';

const AppointmentService = ({ service, setTreatment }) => {
    const { name, slots, price } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="font-bold text-xl text-secondary">{name}</h2>
                <p>{slots.length} {slots.length > 1 ? "slots" : "slot"} Available</p>
                <p>
                    {slots.length ? <span>{slots[0]}</span> : <span className='text-red-500'>Try another date</span>}
                </p>
                <p>Fee: ${price}</p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal" onClick={() => setTreatment(service)} className="btn modal-button btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary" disabled={slots.length === 0}>book appointment </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentService;