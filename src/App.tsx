
import image from './img/logo2.jpg'
import './App.css';
import Header from './components/header';
import logo2 from './logo2.jpg'
import BackgroundSlider from './BackgroundSlider';

import { Outlet } from 'react-router-dom';
import Products from './pages/Products';
import React from 'react';
import './App.css';
import ImageUploader from './ImageUploader';


function App() {
  return (
    <div className="App">
      <title>DiaSys mongolia</title>
      
      
     <Header/>

      <body className="App-body">
        
        <Outlet/>
        
        

      
  
      </body>
      
      <footer className="footer">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
    </footer>
    </div>

  );
}

export default App;
