import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserDetail.css';
import Nav from './Nav';

const UserDetail = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    return (
        <div className="user-detail-container">
            <Nav/>
            <h2>User Details</h2>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserDetail;
