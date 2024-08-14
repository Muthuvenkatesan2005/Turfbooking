import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Overview = () => <div>Overview/Statistics Panel</div>;
const PetsAvailable = () => <div>Pets Available Content</div>;
const ViewRequests = () => <div>View Requests Content</div>;
const UserProfiles = () => <div>User Profiles Content</div>;
const ManagePayment = () => <div>ManagePayments Content</div>;
const ManagePetPickupRequests = () => <div>ManagePetPickupRequests Content</div>;

const DashboardContent = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/pets" element={<PetsAvailable />} />
        <Route path="/requests" element={<ViewRequests />} />
        <Route path="/users" element={<UserProfiles />} />
        <Route path="/payment" element={<ManagePayment />} />
        <Route path="/ManagePetPickupRequests" element={<ManagePetPickupRequests />} />
      </Routes>
    </div>
  );
};

export default DashboardContent;