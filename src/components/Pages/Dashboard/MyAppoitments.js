import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';

const MyAppoitments = () => {
    const navigate = useNavigate();
    const [appointments, setAppointments] = useState([]);
    const [appointmentsLoading, setAppointmentsLoading] = useState(true);
    const [user, loading] = useAuthState(auth);


    useEffect(() => {
        if (user) {
            fetch(`https://mighty-cove-59999.herokuapp.com/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    // console.log('Response', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/home');
                    }
                    return res.json()
                })
                .then(data => {
                    // console.log(data)
                    setAppointments(data);
                    setAppointmentsLoading(false);
                });
        }
    }, [user, navigate])

    if (loading || appointmentsLoading) {
        return <Loading />
    }

    return (
        <div className='px-2'>
            <h2>My Appointments: {appointments?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th className='text-center'>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments?.map((a, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{a.patientName}</td>
                                    <td>{a.date}</td>
                                    <td>{a.slot}</td>
                                    <td>{a.treatment}</td>
                                    <td>
                                        {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><div className='text-center'> 
                                        <button className='btn btn-xs btn-success'>Pay</button>
                                            </div></Link>}
                                        {(a.price && a.paid) && <div className='text-center'>
                                            <button className='btn btn-xs btn-success ' disabled>already paid</button>
                                            <p className=' text-xs'>Tranjection ID : <span className='text-success'>{a.transactionId}</span></p>
                                        </div>}
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default MyAppoitments;