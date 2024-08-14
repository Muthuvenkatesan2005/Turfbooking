import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import NavBar from './NavBar';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/users', formData);
            console.log(response.data);
            navigate('/userdetails'); // Navigate to UserDetails after successful registration
        } catch (error) {
            console.error('There was an error registering the user!', error);
        }
    };

    return (
        <div>
        <NavBar/>
        <div className="body8">
            <div className="container2" id="container">
                <div className="overlay-container">
                    <form className="form1" onSubmit={handleSubmit}>
                        <h1>Create New</h1>
                        <input type="text" id='username' placeholder='Username' className="inp" onChange={handleChange} value={formData.username} />
                        <input type="email" id='email' placeholder='Email' className="inp" onChange={handleChange} value={formData.email} />
                        <input type="password" id='password' placeholder='Password' className="inp" onChange={handleChange} value={formData.password} /><br />
                        <button type="submit" className="button8">Register</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;
