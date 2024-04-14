import React, { useState } from 'react';
import './Sidebar.css';

const SidebarItem = ({ icon, label, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`sidebar-item ${isExpanded ? 'expanded' : ''}`}>
      <div className="sidebar-item-header" onClick={toggleExpansion}>
        <span className="material-symbols-outlined">{icon}</span>
        <span className="sidebar-label">{label}</span>
      </div>
      {isExpanded && (
        <div className="sidebar-submenu">
          <ul>{children}</ul>
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarItem icon="storefront" label="Sellers">
        <li>Pre Onboarding Sellers</li>
        <li>Sellers List</li>
        <li>Create New Seller</li>
        <li>Survey Response</li>
        <li>Rate Card Templates</li>
      </SidebarItem>
      <SidebarItem icon="checklist" label="Checklist" />
      <SidebarItem icon="show_chart" label="Seller Performance" />
      <SidebarItem icon="analytics" label="Analytics" />
      <SidebarItem icon="shopping_cart" label="Orders" />
      <SidebarItem icon="attach_money" label="Finance">
        <li>Remittance</li>
        <li>Expense Ledger</li>
        <li>Expenses</li>
        <li>Billing Invoices</li>
        <li>Profit &amp; Loss</li>
        <li>System Recharges</li>
        <li>Weight Delta</li>
      </SidebarItem>
      <SidebarItem icon="upload_file" label="CSV Bulk Upload" />
    </div>
  );
};

// const Sidebar = () => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleSidebar = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div
//       className={`sidebar ${isExpanded ? 'expanded' : ''}`}
//       onMouseEnter={toggleSidebar}
//       onMouseLeave={toggleSidebar}
//     >
//       <div className="sidebar-item">
//         <span className="material-symbols-outlined">storefront</span>
//         <span className="sidebar-label">Sellers</span>
//         <ul className="sidebar-submenu">
//           <li>Pre Onboarding Sellers</li>
//           <li>Sellers List</li>
//           <li>Create New Seller</li>
//           <li>Survey Response</li>
//           <li>Rate Card Templates</li>
//         </ul>
//       </div>
//       <div className="sidebar-item">
//         <span className="material-symbols-outlined">checklist</span>
//         <span className="sidebar-label">Checklist</span>
//       </div>
//       <div className="sidebar-item">
//         <span className="material-symbols-outlined">show_chart</span>
//         <span className="sidebar-label">Seller Performance</span>
//       </div>
//       <div className="sidebar-item">
//         <span className="material-symbols-outlined">analytics</span>
//         <span className="sidebar-label">Analytics</span>
//       </div>
//       <div className="sidebar-item">
//         <span className="material-symbols-outlined">shopping_cart</span>
//         <span className="sidebar-label">Orders</span>
//       </div>
//       <div className="sidebar-item">
//         <span className="material-symbols-outlined">attach_money</span>
//         <span className="sidebar-label">Finance</span>
//       </div>
//       <div className="sidebar-item">
//         <span className="material-symbols-outlined">upload_file</span>
//         <span className="sidebar-label">CSV Bulk Upload</span>
//       </div>
//       <div className="sidebar-item">
//         <span className="material-symbols-outlined">build</span>
//         <span className="sidebar-label">Internal Tools</span>
//       </div>
//       <div className="sidebar-item">
//         <span className="material-symbols-outlined">domain</span>
//         <span className="sidebar-label">Domain Transfer</span>
//       </div>
//     </div>
//   );
// };

export default Sidebar;