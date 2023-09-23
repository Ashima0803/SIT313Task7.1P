import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css'; 
import Header from './Header';
import PostButton from './PostButton';
import LoginButton from './LoginButton';
import Home from './routes/Home'
import About from "./routes/About";
import Login from "./Login";
import Signup from "./Signup";  


function App() {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
     <Route path='/about' element={<About />} />
     <Route path='/login' element={<Login />} />
     <Route path='/signup' element={<Signup />} />

    </Routes>

    
  );
}

export default App;