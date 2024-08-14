import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginForm from './LoginForm';
import './App.css';
import SignUp from './SignUp';
import HomePage from './HomePage';
import Login from './Login';
import Register from './Register';
import AboutUs from './AboutUs';

// import AboutPage from './AboutPage';
import BookingSearch from './BookingSearch';
// import TurfBookingPayment from './TurfBookingPayment';

// import NaveBar from './NaveBar';
import { Home, HomeIcon, Search, Sidebar } from 'lucide-react';
// import TurfBookingPayment from './TurfBookingPayment';
import Categories from './Categories';
import ContactUs from './ContactUs';
import Booking from './Booking';
import PlaceDetails from './PlaceDetails';
import LandingPage from './LandingPage';
import Reservation from './Reservation';
import PaymentPage from './PaymentPage';
import PlaceDetails1 from './PlaceDetails1';
import Categories1 from './Categories1';

import RegisterTurf from './RegisterTurf';
import Loginturf from './LoginTurf';
import ManagePayment from './ManagePayment';
import Request from './Request';
import DashboardLayout from './DashboardLayout';

import UserDetail from './UserDetail';
import TurfDetail from './TurfDetails';
import InformationView from './InformationView';
import NavBar from './NavBar';
import { Toolbar, Tooltip } from '@mui/material';
import { Dashboard } from '@mui/icons-material';
import Sidbar from './SidBar';
import AdminDashboard from './AdminDashboard';
import Nav from './Nav';
import MembershipPage from './MembershipPage';
// import MapComponent from './MapComponent';
// import TurfBookingPayment from './TurfBookingPayment';
// import TurfBookingPayment from './TurfBookingPayment';

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
                {/* <Route path="/" element={<PaymentPage/>} /> */}
                <Route path="/land" element={<LandingPage/>} />
                {/* <Route path="/booking" element={<Booking/>} /> */}
                {/* <Route path="/" element={<Booking/>} /> */}
               
                <Route path="/cat" element={<Categories1/>} />
              

               <Route path="/cati" element={<Categories/>}/>
                       <Route path="/place-details/:id" element={<PlaceDetails />} />


                {/* <Route path="/" element={<RegisterTurf/>} /> */}
                {/* <Route path="/" element={<DashboardLayout/>} /> */}
                {/* <Route path="/" element={<NavBar/>} /> */}
                {/* <Route path="/" element={<Loginturf/>} /> */}

                {/* <Route path="/booking" exact component={Booking} /> */}
                {/* <Route path="/Booking" element={<Booking/>} /> */}
                <Route path="/login" element={<Login/>} />
                {/* <Route path="/" element={<Register/>} /> */}
                <Route path="/AboutUs" element={<AboutUs/>} />
                <Route path="/land" element={<LandingPage/>} />
                <Route path="/Regist" element={<RegisterTurf/>} />
                <Route path="/userdet" element={<UserDetail/>}/>
                  {/* <Route path="/MapComponent" element={<MapComponent/>}/>  */}
                <Route path="/ContactUs" element={<ContactUs/>} />
                {/* <Route path="/Bsearch" element={<BookingSearch/>} /> */}
                <Route path="/res" element={<Reservation/>} />
                <Route path="/pay" element={<PaymentPage/>} />
                <Route path="/req" element={<Request/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/admin" element={<TurfDetail/>}/>
                <Route path="/infview" element={<InformationView/>}/>
                <Route path="/nav" element={<NavBar/>}/>
                <Route path="/tool" element={<Tooltip/>}/>
                <Route path="/das" element={<Dashboard/>}/>
                <Route path="/sid" element={<Sidbar/>}/>
                <Route path="/adm" element={<AdminDashboard/>}/>
                {/* <Route path="/adm" element={<smpt/>}/> */}
                <Route path="/nav" element={<Nav/>}/>
                <Route path="/mem" element={<MembershipPage/>}/>
                <Route path="/loturf" element={<Loginturf/>}/>
                
                

                


                {/* <Route path="/payment" element={<TurfBookingPayment/>} /> */}
                <Route path="/" element={<HomePage/>} />
                <Route path="/about" element={<AboutUs/>} />
                
                
                {/* <Route path="/signup" element={<SignUp/>}/> */}
                {/* <Route path="/Login" element={<LoginForm/>}/> */}
        </Routes>
        </BrowserRouter>
    );
}

export default App;