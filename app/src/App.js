// Filename - App.js

import React from "react";
import logo from './img/logo_taller_nobg.png';
import MenuNavBar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
console.log(logo);


function App() {
  return (
    <div className="app-container">
      <Router basename="/">
        <MenuNavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/acerca_de" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/otros" element={<Blogs />} />
        </Routes>
      </Router>
      <Footer />
    </div>

  );
}



export default App;
