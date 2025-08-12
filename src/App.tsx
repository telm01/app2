
import './App.css';
import Header from './components/header';
import { Outlet } from 'react-router-dom';
import React from 'react';
import './csss/Home.css';
import './csss/Contact.css';
import './csss/Products.css';
import './csss/About.css';
import './csss/service.css';
import './csss/Daily-life.css';
import './csss/brand-slider.css';






function App() {
  return (
    <div className="App">
     < h1 className="text-3xl font-bold underline">
      
    </h1>
      <title>DiaSys mongolia</title>
      
      
     <Header/>

      <body className="App-body">
      
      
   
        <Outlet/>
        
        

      
  
      </body>
      
      <footer className="footer">
        
       <div>
     </div> 
        
  <div className="footer-container">
    <div className="footer-grid">
      <div>
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="footer-brand-text">Diasys Mongolia</h3>
            <p className="footer-brand-subtitle">Medical Excellence</p>
          </div>
        </div>
        <p className="footer-description">
          Your trusted partner for medical equipment distribution across Mongolia.
        </p>
      </div>

      <div>
        <h4 className="footer-section-title">Products</h4>
        <ul className="footer-links">
          <li>
            <a href="#" className="footer-link">
              Diagnostic Equipment
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Surgical Instruments
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Patient Monitoring
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Laboratory Equipment
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="footer-section-title">Services</h4>
        <ul className="footer-links">
          <li>
            <a href="#" className="footer-link">
              Installation
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Training
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Maintenance
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Support
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="footer-section-title">Contact</h4>
        <ul className="footer-links">
          <li>+976 99036093</li>
          <li>support@gmail.com</li>
          <li>Diasys mongolia </li>
          <li>
            Peace Avenue 123
            <br />
            Ulaanbaatar, Mongolia
          </li>
        </ul>
      </div>
      
    </div>
<div className="footer-bottom">
      <p>&copy; 2024 MedEquip Mongolia. All rights reserved.</p>
    </div>
    
  </div>
 

    </footer>
    </div>

  );
}

export default App;
