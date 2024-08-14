import React from 'react';
import './MembershipPage.css';
import NavBar from './NavBar';
import Footer from './Footer';

const MembershipPage = () => {
    const plans = [
        {
            name: "Basic Plan",
            price: "$10/month",
            features: ["10% off on all bookings", "Priority booking"],
            borderColor: "#ffcc00"
        },
        {
            name: "Standard Plan",
            price: "$20/month",
            features: ["20% off on all bookings", "Priority booking", "2 Guest Passes per month"],
            borderColor: "#00ccff"
        },
        {
            name: "Premium Plan",
            price: "$30/month",
            features: ["30% off on all bookings", "Priority booking", "5 Guest Passes per month", "Access to exclusive events"],
            borderColor: "#00cc66"
        }
    ];

    return (
        <div>
            <NavBar/>
            {/* <nav className="navbar">
                <div className="logo">
                    <img src="your-logo.png" alt="Logo" />
                </div>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Membership</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
                <div className="search-bar">
                    <input type="text" placeholder="Search sports..." />
                </div>
            </nav> */}

            <section className="membership">
                <h1>Join Our Membership Program</h1>
                <p>Choose the plan that best suits your needs and enjoy exclusive benefits!</p>
                <div className="plans">
                    {plans.map((plan, index) => (
                        <div className="plan" key={index} style={{ borderTopColor: plan.borderColor }}>
                            <h2>{plan.name}</h2>
                            <h3>{plan.price}</h3>
                            <ul>
                                {plan.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                            <button>Buy Now</button>
                        </div>
                    ))}
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default MembershipPage;
