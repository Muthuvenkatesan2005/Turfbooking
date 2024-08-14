import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './request.css'; // Updated CSS file for styling

const Request = () => {
  const [requests, setRequests] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/reservations');
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    fetchRequests();
  }, []);

  const updateStatus = (id, newStatus) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: newStatus } : request
      )
    );

    // Send the status update to the backend
    axios.put(`http://localhost:8080/api/reservations/${id}`, { status: newStatus })
      .catch(error => console.error('Error updating reservation:', error));
  };

  const filteredRequests = filter === 'All'
    ? requests
    : requests.filter(request => request.status === filter);

  return (
    
    <div className="manage-booking-requests">
      <h1>Turf Booking Requests</h1>
      <div className="filter-buttons">
        <button
          className={`filter-button ${filter === 'All' ? 'active' : ''}`}
          onClick={() => setFilter('All')}
        >
          All
        </button>
        <button
          className={`filter-button ${filter === 'Pending' ? 'active' : ''}`}
          onClick={() => setFilter('Pending')}
        >
          Pending
        </button>
        <button
          className={`filter-button ${filter === 'Approved' ? 'active' : ''}`}
          onClick={() => setFilter('Approved')}
        >
          Approved
        </button>
        <button
          className={`filter-button ${filter === 'Denied' ? 'active' : ''}`}
          onClick={() => setFilter('Denied')}
        >
          Denied
        </button>
      </div>
      <table className="requests-table">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Duration</th>
            <th>Status</th> {/* New status column */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests.map((request) => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.name}</td>
              <td>{request.date}</td>
              <td>{request.time}</td>
              <td>{request.duration} minutes</td>
              <td>{request.status}</td> {/* Display status */}
              <td>
                {request.status === 'Pending' && (
                  <>
                    <button
                      className="approve-button"
                      onClick={() => updateStatus(request.id, 'Approved')}
                    >
                      Accept
                    </button>
                    <button
                      className="deny-button"
                      onClick={() => updateStatus(request.id, 'Denied')}
                    >
                      Decline
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Request;
