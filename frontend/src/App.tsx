import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import CompleteProfile from './components/CompleteProfile'
import GrandpalForm from './components/GrandpalForm'
import About from './components/About';
import Contact from './components/Contact'
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import MateForm from './components/MateForm';
import Events from './components/Events';




function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/completeProfile' element={<CompleteProfile />}></Route>
          <Route path='/grandpalForm' element={<GrandpalForm />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/testimonial' element={<Testimonials />}></Route>
          <Route path='/mateForm' element={<MateForm />}></Route>
          <Route path='/Events' element={<Events />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
