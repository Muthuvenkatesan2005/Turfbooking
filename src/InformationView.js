import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './InformationView.css';
import Nav from './Nav';

const InformationView = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/contact');
        setMessages(response.data);
      } catch (err) {
        setError('Error fetching messages.');
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="information-view-container">
      <Nav/>
      <h1>Received Messages</h1>
      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <ul className="message-list">
          {messages.map((message) => (
            <li key={message.id} className="message-item">
              <h2>{message.name}</h2>
              <p><strong>Email:</strong> {message.email}</p>
              <p><strong>Message:</strong> {message.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InformationView;
