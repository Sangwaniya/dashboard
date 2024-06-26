import React, { useState } from 'react';
import './SellersList.css';

const SellersList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [onboardingStatus, setOnboardingStatus] = useState<string>('');
  const [accountStatus, setAccountStatus] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleOnboardingStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOnboardingStatus(event.target.value);
  };

  const handleAccountStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAccountStatus(event.target.value);
  };

  return (
    <div className="sellers-list">
      <header className="sellers-list-header">
        <h1>Sellers List</h1>
        <div className="filters">
          <input
            type="text"
            placeholder="Search seller or press 'Enter' to view All Seller list"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <select value={onboardingStatus} onChange={handleOnboardingStatusChange}>
            <option value="">Onboarding Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
          <select value={accountStatus} onChange={handleAccountStatusChange}>
            <option value="">Account Status</option>
            <option value="active">Active</option>
            <option value="suspended">Suspended</option>
          </select>
        </div>
      </header>
      <div className="sellers-list-content">
        <div className="seller-card">
          <div className="seller-info">
            <img src="seller-avatar.png" alt="Seller Avatar" />
            <h3>Seller Name</h3>
            <p>Seller Description</p>
          </div>
          <div className="seller-status">
            <span className="onboarding-status">Onboarding Status: Pending</span>
            <span className="account-status">Account Status: Active</span>
          </div>
        </div>
        {/* Add more seller cards as needed */}
      </div>
    </div>
  );
};

export default SellersList;