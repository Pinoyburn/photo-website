import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Router, Routes, Route, Link } from "react-router-dom";

import Home from "./container/Home/Home.jsx";
import Graduation from "./container/Graduation/Graduation.jsx";
import Portraits from "./container/Portraits/Portraits.jsx";
import Landscapes from "./container/Landscapes/Landscapes.jsx";
import Contact from "./container/Contact/Contact.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/graduation" element={<Graduation />} />
        <Route path="/portraits" element={<Portraits />} />
        <Route path="/landscapes" element={<Landscapes />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
