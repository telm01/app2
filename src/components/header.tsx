import React, { useState } from 'react';

export default function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  function toggleDisplay() {
    setSidebarVisible(!sidebarVisible);
  }

  return (
    <>
      <div>
        <svg className="toggleDisplay" onClick={toggleDisplay} xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26">
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
        </svg>
      </div>

      <header className="App-header">
        <nav className="navbar">
          <div className="dia" >
            <a href="/"><strong >DiaSys MonGolia</strong></a>
            <p className="me">Medical device distributer</p>
          </div>

          <div className="menu">
            <ul className="nav-links">
              <a className="active" href="/">
                Home
              </a>
              <a className="navbar-Items" href="/product">Product</a>
              <a className="navbar-Items" href="/service">Service area</a>
              <a className="navbar-Items" href="/about">About us</a>
              <a className="navbar-Items" href="/contact">Contact us</a>
            </ul>
          </div>

          <ul className="sidebar" style={{ display: sidebarVisible ? "flex" : "none" }}>
          <a className="navbar-Items" onClick={toggleDisplay}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a>
            <a className="active" href="/">
              Home
            </a>
            <a className="navbar-Items" href="/product">Product</a>
            <a className="navbar-Items" href="/service">Service area</a>
            <a className="navbar-Items" href="/about">About us</a>
            <a className="navbar-Items" href="/contact">Contact us</a>
          </ul>
        </nav>
      </header>
    </>
  );
}
