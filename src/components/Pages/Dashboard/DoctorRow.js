import React from 'react';

const DoctorRow = ({ doctor, index, setDeletingDoctor }) => {

    const { name, specialty, img, email } = doctor;
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-12 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={() => setDeletingDoctor(doctor)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;