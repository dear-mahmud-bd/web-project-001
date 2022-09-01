import React from 'react';

const AppointmentService = ({ service }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="font-bold text-xl text-secondary">{name}</h2>
                <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} Available</p>
                <p>
                    {slots.length ? <span>{slots[0]}</span> : <span className='text-red-500'>Try another date</span>}
                </p>
                <div className="card-actions justify-center">
                    <button disabled={slots.length === 0} className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">book appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentService;