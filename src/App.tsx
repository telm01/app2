

import './App.css';
import Header from './components/header';

import BackgroundSlider from './BackgroundSlider';

import { Outlet } from 'react-router-dom';
import Products from './pages/Products';
import React from 'react';
import './App.css';






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
        <p>&copy; 2023 Diasys Mongolia. All rights reserved.</p>
       <div>
       <p>Email:    support@gmail.com</p>
        <p>Facebook:    Diasys mongolia</p>
        <p>Phone number:    99036093</p></div> 
    </footer>
    </div>

  );
}

export default App;
