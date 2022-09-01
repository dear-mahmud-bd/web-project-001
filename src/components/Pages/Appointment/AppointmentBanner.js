import React, { useState } from 'react';
import bg from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date());
    return (
        <section className='mb-24 py-20'
            style={{
                background: `url(${bg})`,
                height: "80vh",
            }}
        >
            <div className="hero min-h-[80vh] px-12 " >
                <div className="hero-content flex-col md:flex-row-reverse ">
                    <img src={chair} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                        <p>You picked {format(date, 'PP')}.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;