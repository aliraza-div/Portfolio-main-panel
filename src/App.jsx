import React from 'react'
import {BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
const App = () => {
  return (
    <div> <h3>My Portfolio</h3>
    
      <Router> 
        <Navbar/>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <Routes>
          <Route path = "/" element = {<Home/>}></Route>
         <Route path = "/about" element = {<About/>}></Route>
         <Route path = "/contact" element = {<Contact/>}></Route>
          <Route path = "/projects" element = {<Projects/>}></Route>
        </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  )
}

export default App