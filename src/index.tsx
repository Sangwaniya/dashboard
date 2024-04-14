import React from 'react';
import ReactDOM from 'react-dom/client';
import SellersList from './SellersList';
import reportWebVitals from './reportWebVitals';
import Sidebar from './Sidebar';
import './index.css'

// Add the Material Symbols Outlined CSS link
import '@fontsource/material-symbols-outlined';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <SellersList />
    <Sidebar/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
