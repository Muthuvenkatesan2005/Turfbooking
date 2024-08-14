import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TurfDetails.css';
import Nav from './Nav';

const TurfDetail = () => {
    const [turfs, setTurfs] = useState([]);

    useEffect(() => {
        // Fetching all turf details from the backend
        axios.get('http://localhost:8080/api/turfs')
            .then(response => {
                setTurfs(response.data);
            })
            .catch(error => {
                console.error('Error fetching turfs:', error);
            });
    }, []);

    return (
        <div className="turf-detail-container">
            <Nav/>
            <h2>Turf Details</h2>
            <table className="turf-table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Turf Name</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {turfs.map((turf, index) => (
                        <tr key={turf.id}>
                            <td>{index + 1}</td>
                            <td>{turf.name}</td>
                            <td>{turf.email}</td>
                            <td>{turf.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TurfDetail;
