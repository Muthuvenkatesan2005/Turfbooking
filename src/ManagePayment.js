import React, { useState } from 'react';
import './ManagePayment.css'; // Import the CSS file for styling

const payments = [
  { id: '1', applicationId: '12345', date: '2024-08-05', transactionId: 'abc123xyz', amount: '100.00', status: 'Completed',petname: 'buddy' },
  { id: '2', applicationId: '67890', date: '2024-08-06', transactionId: 'def456uvw', amount: '150.00', status: 'Pending',petname: 'Bella' },
  // Add more dummy data as needed
];

const ManagePayment = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handleViewDetails = (payment) => {
    setSelectedPayment(payment);
  };

  const handleCloseModal = () => {
    setSelectedPayment(null);
  };

  return (
    <div className="manage-payment-container">
      <h2>Manage Payments</h2>
      <table className="payment-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Application ID</th>
            <th>Date</th>
            <th>Transaction ID</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(payment => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.applicationId}</td>
              <td>{new Date(payment.date).toLocaleDateString()}</td>
              <td>{payment.transactionId}</td>
              <td>${payment.amount}</td>
              <td>{payment.status}</td>
              <td>{payment.status}</td>
              
              <td>
                <button className="view-details-button" onClick={() => handleViewDetails(payment)}>
                  View Details

                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedPayment && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}><img src='https://static.thenounproject.com/png/1479017-200.png'/></button>
            <div className="modal-info">
              <h3>Payment Details</h3>
              <p><strong>ID:</strong> {selectedPayment.id}</p>
              <p><strong>Application ID:</strong> {selectedPayment.applicationId}</p>
              <p><strong>Date:</strong> {new Date(selectedPayment.date).toLocaleDateString()}</p>
              <p><strong>Transaction ID:</strong> {selectedPayment.transactionId}</p>
              <p><strong>Amount:</strong> ${selectedPayment.amount}</p>
              <p><strong>Status:</strong> {selectedPayment.status}</p>
              <p><strong>pet name:</strong> {selectedPayment.petname}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagePayment;