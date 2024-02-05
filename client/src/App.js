import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Header from './components/common/Header';
import ContactForm from './pages/contact-form';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact-form' element={<ContactForm />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
