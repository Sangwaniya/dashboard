import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSellersOpen, setIsSellersOpen] = useState(false);
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  const [isFinanceOpen, setIsFinanceOpen] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleSellers = () => {
    setIsSellersOpen(!isSellersOpen);
  };

  const toggleChecklist = () => {
    setIsChecklistOpen(!isChecklistOpen);
  };

  const toggleAnalytics = () => {
    setIsAnalyticsOpen(!isAnalyticsOpen);
  };

  const toggleOrders = () => {
    setIsOrdersOpen(!isOrdersOpen);
  };

  const toggleFinance = () => {
    setIsFinanceOpen(!isFinanceOpen);
  };

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : ''}`} role="navigation" tabIndex="0" onMouseEnter={toggleSidebar} onMouseLeave={toggleSidebar}>
      <div className="search-box">
        <input type="text" placeholder="Search  items" />
      </div>
      <div className="sidebar-item">
        <div className="sidebar-item-header" onClick={toggleSellers}>
          <span className="material-symbols-outlined">storefront</span>
          <span className="sidebar-label">Seller</span>
          {isSellersOpen ? (
            <span className="material-symbols-outlined sidebar-arrow">expand_less</span>
          ) : (
            <span className="material-symbols-outlined sidebar-arrow">expand_more</span>
          )}
        </div>
        {isSellersOpen && (
          <>
            <div className="sidebar-submenu-item">Pre Onboarding Sellers</div>
            <div className="sidebar-submenu-item">Sellers List</div>
            <div className="sidebar-submenu-item">Create New Seller</div>
            <div className="sidebar-submenu-item">Survey Response</div>
            <div className="sidebar-submenu-item">Rate Card Templates</div>
          </>
        )}
      </div>
      <div className="sidebar-item" onClick={toggleChecklist}>
        <span className="material-symbols-outlined">checklist</span>
        <span className="sidebar-label">Checklist</span>
        {isChecklistOpen ? (
          <span className="material-symbols-outlined sidebar-arrow">expand_less</span>
        ) : (
          <span className="material-symbols-outlined sidebar-arrow">expand_more</span>
        )}
        {isChecklistOpen && isExpanded && (
          <ul >
            <li>Pre Onboarding Sellers</li>
            <li>Sellers List</li>
            <li>Create New Seller</li>
            <li>Survey Response</li>
            <li>Rate Card Templates</li>
          </ul>
        )}
      </div>
      <div className="sidebar-item" onClick={toggleAnalytics}>
        <span className="material-symbols-outlined">analytics</span>
        <span className="sidebar-label">Analytics</span>
        {isAnalyticsOpen ? (
          <span className="material-symbols-outlined sidebar-arrow">expand_less</span>
        ) : (
          <span className="material-symbols-outlined sidebar-arrow">expand_more</span>
        )}
      </div>
      <div className="sidebar-item" onClick={toggleOrders}>
        <span className="material-symbols-outlined">shopping_cart</span>
        <span className="sidebar-label">Orders</span>
        {isOrdersOpen ? (
          <span className="material-symbols-outlined sidebar-arrow">expand_less</span>
        ) : (
          <span className="material-symbols-outlined sidebar-arrow">expand_more</span>
        )}
      </div>
      <div className="sidebar-item" onClick={toggleFinance}>
        <span className="material-symbols-outlined">attach_money</span>
        <span className="sidebar-label">Finance</span>
        {isFinanceOpen ? (
          <span className="material-symbols-outlined sidebar-arrow">expand_less</span>
        ) : (
          <span className="material-symbols-outlined sidebar-arrow">expand_more</span>
        )}
      </div>
      <div className="sidebar-item">
        <span className="material-symbols-outlined">upload_file</span>
        <span className="sidebar-label">CSV Bulk Upload</span>
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