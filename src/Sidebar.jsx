import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : ''}`} role="navigation" tabIndex="0" onMouseEnter={toggleSidebar} onMouseLeave={toggleSidebar}>
      <div className="search-box">
        <input type="text" placeholder="Search  items" />
      </div>
      <div className="sidebar-item">
        <span className="material-symbols-outlined">upload_file</span>
        <span className="sidebar-label">CSV Bulk Upload</span>
      </div>
      <div>
        <span className="material-symbols-outlined">checklist</span>
        <span className="sidebar-label">Checklist</span>
      </div>
      <div className="sidebar-item">
        <span className="material-symbols-outlined">storefront</span>
        <span className="sidebar-label">Sellers</span>
      </div>
      <div className="sidebar-item">
        <span className="material-symbols-outlined">build</span>
        <span className="sidebar-label">Internal Tools</span>
      </div>
      <div className="sidebar-item">
        <span className="material-symbols-outlined">domain</span>
        <span className="sidebar-label">Domain Transfer</span>
      </div>
      <div className="sidebar-item">
        <span className="material-symbols-outlined">featured_seasonal_and_gifts</span>
        <span className="sidebar-label">Sales Modules</span>
      </div>
      <div className="sidebar-item">
        <span className="material-symbols-outlined">person</span>
        <span className="sidebar-label">System Users</span>
      </div>
      <div className="sidebar-item">
        <span className="material-symbols-outlined">manage_accounts</span>
        <span className="sidebar-label">Seller Management</span>
      </div>
      <div className="sidebar-item">
        <span className="material-symbols-outlined">bar_chart</span>
        <span className="sidebar-label">Sales Management</span>
      </div>
      <div className="sidebar-item">
        <span className="material-symbols-outlined">chat</span>
        <span className="sidebar-label">Seller Whatsapp</span>
      </div>
      <div className="sidebar-item">
        <span className="material-symbols-outlined">verified</span>
        <span className="sidebar-label">Verify New HSM</span>
      </div>
      <div className="sidebar-item">
        <span className="material-symbols-outlined">support_agent</span>
        <span className="sidebar-label">Support Management</span>
      </div>
      <div className="sidebar-item">
        <span className="material-symbols-outlined">upload</span>
        <span className="sidebar-label">Upload Media</span>
      </div>
    </div>
  );
};
export default Sidebar;